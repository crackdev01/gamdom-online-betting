import { Request, Response } from "express";
import { body, param } from "express-validator";
import HttpStatus from "http-status";
import { sportsEventsService } from "services";
import { errorHandlerWrapper, NotFoundError } from "utils";

export const updateEventArgumentValidator = () => {
    return [
        param('id').notEmpty().withMessage('Id is required').isInt().withMessage('Id must be a number'),
        body('name').optional().isString().withMessage('Name must be a string'),
        body('description').optional().isString().withMessage('Description must be a string'),
        body('odds').optional().isDecimal().withMessage('Odds must be a number'),
    ];
}

const updateEvent = async (req: Request, res: Response) => {
    const { id } = req.params;

    const event = await sportsEventsService.getEventById(Number(id));

    if (!event) {
        throw new NotFoundError('Event not found');
    }

    const updatedEvent = await sportsEventsService.updateEvent(Number(id), req.body);
    res.status(HttpStatus.OK).json(updatedEvent);
};

export const updateEventHandler = errorHandlerWrapper(updateEvent);