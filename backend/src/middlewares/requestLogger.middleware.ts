import { Request, Response, NextFunction } from "express";
import { logger } from "utils";

export const requestLoggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info({
    method: req.method,
    url: req.url,
    body: req.body,
    query: req.query,
    params: req.params,
  });
  
  next();
};

