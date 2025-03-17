import { Request, Response } from "express";
import { param } from "express-validator";
import HttpStatus from "http-status";
import { errorHandlerWrapper } from "utils";

export const getEventByIdArgumentValidator = () => {
    return [
        param('id').notEmpty().withMessage('Id is required').isInt().withMessage('Id must be a number'),
    ];
}

const getEventById = async (req: Request, res: Response) => {
    const { id } = req.params;

    console.log('Get Event By ID', id);

    res.status(HttpStatus.OK).json({ id });
};

export const getEventByIdHandler = errorHandlerWrapper(getEventById);