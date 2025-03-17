import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import { BadRequestError } from "./errors";

export const errorHandlerWrapper = (
  func: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new BadRequestError(
          "Invalid request",
          errors.array().map((error) => error.msg)
        );
      }

      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
