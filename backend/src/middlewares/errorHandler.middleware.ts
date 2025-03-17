import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status";
import { BadRequestError, CustomError, logger } from "utils";

export const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(JSON.parse(JSON.stringify(err)));

  if(err instanceof CustomError) {
    if(err instanceof BadRequestError) {
      res.status(err.statusCode).json({ message: err.messages });
    } else {
      res.status(err.statusCode).json({ message: err.message });
    }
    return;
  }

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
};
