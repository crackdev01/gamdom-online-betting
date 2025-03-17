import { Request, Response } from "express";
import { body } from "express-validator";
import HttpStatus from "http-status";
import { errorHandlerWrapper } from "utils";

interface CreateEventRequest {
  name: string;
  description: string;
  odds: number;
}

export const createEventArgumentValidator = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").optional(),
    body("odds")
      .notEmpty()
      .withMessage("Odds is required")
      .isNumeric()
      .withMessage("Odds must be a number"),
  ];
};

const createEvent = async (
  req: Request<{}, {}, CreateEventRequest>,
  res: Response
) => {
  const { name, description, odds } = req.body;

  console.log('Create Event', name, description, odds);

  res.status(HttpStatus.CREATED).json(req.body);
};

export const createEventHandler = errorHandlerWrapper(createEvent);
