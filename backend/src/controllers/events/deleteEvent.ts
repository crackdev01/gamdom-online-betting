import { Request, Response } from "express";
import { param } from "express-validator";
import HttpStatus from "http-status";
import { sportsEventsService } from "services";
import { errorHandlerWrapper, NotFoundError } from "utils";

export const deleteEventArgumentValidator = () => {
    return [
        param('id').notEmpty().withMessage('Id is required').isInt().withMessage('Id must be a number'),
    ];
}

const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;

    const event = await sportsEventsService.getEventById(Number(id));

    if(event) {
        const deleted = await sportsEventsService.deleteEvent(Number(id));
    
        res.status(HttpStatus.OK).json({deleted});
    } else {
        throw new NotFoundError('Event not found');
    }

};

export const deleteEventHandler = errorHandlerWrapper(deleteEvent);
