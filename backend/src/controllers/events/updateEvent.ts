import { Request, Response } from "express";
import { body, param } from "express-validator";
import HttpStatus from "http-status";
import { errorHandlerWrapper } from "utils";

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

    console.log('Update Event By ID', id);

    res.status(HttpStatus.OK).json({ id });
};

export const updateEventHandler = errorHandlerWrapper(updateEvent);