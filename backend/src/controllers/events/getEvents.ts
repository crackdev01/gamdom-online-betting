import { Request, Response } from "express";
import HttpStatus from "http-status";
import { sportsEventsService } from "services";
import { errorHandlerWrapper } from "utils";

export const getEventsArgumentValidator = () => {
  return []
}
    
const getEvents = async (_req: Request, res: Response) => {
  const events = await sportsEventsService.getEvents();
  res.status(HttpStatus.OK).json(events);
};

export const getEventsHandler = errorHandlerWrapper(getEvents);