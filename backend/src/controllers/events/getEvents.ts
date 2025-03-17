import { Request, Response } from "express";
import HttpStatus from "http-status";
import { errorHandlerWrapper } from "utils";

export const getEventsArgumentValidator = () => {
  return []
}
    
const getEvents = async (_req: Request, res: Response) => {
  console.log('Get Events');
  
  res.status(HttpStatus.OK).json([]);
};

export const getEventsHandler = errorHandlerWrapper(getEvents);