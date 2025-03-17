import { Request, Response } from "express";
import { param } from "express-validator";
import HttpStatus from "http-status";
import { sportsEventsService } from "services";
import { errorHandlerWrapper, NotFoundError } from "utils";

export const getEventByIdArgumentValidator = () => {
    return [
        param('id').notEmpty().withMessage('Id is required').isInt().withMessage('Id must be a number'),
    ];
}

const getEventById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const event = await sportsEventsService.getEventById(Number(id));

    if (!event) {
        throw new NotFoundError('Event not found');
    }

    res.status(HttpStatus.OK).json(event);
};

export const getEventByIdHandler = errorHandlerWrapper(getEventById);