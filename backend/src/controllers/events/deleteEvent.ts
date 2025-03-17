import { Request, Response } from "express";
import { param } from "express-validator";
import HttpStatus from "http-status";
import { errorHandlerWrapper } from "utils";

export const deleteEventArgumentValidator = () => {
    return [
        param('id').notEmpty().withMessage('Id is required').isInt().withMessage('Id must be a number'),
    ];
}

const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;

    console.log('Delete Event', id);
   
    res.status(HttpStatus.OK).json({deleted: true});

};

export const deleteEventHandler = errorHandlerWrapper(deleteEvent);
