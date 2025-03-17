import { SportsEvent } from "entities";
import { NotFoundError, SportsEventsRepository } from "utils";

export const createEvent = async (
  event: Pick<SportsEvent, "name" | "description" | "odds">
): Promise<SportsEvent> => {
  const repository = await SportsEventsRepository();
  return await repository.save(event);
};

export const getEvents = async (): Promise<SportsEvent[]> => {
  const repository = await SportsEventsRepository();
  return await repository.find();
};

export const getEventById = async (id: number): Promise<SportsEvent | null> => {
  const repository = await SportsEventsRepository();
  return await repository.findOne({ where: { id } });
};

export const updateEvent = async (
  id: number,
  event: Partial<Pick<SportsEvent, "name" | "description" | "odds">>
): Promise<SportsEvent> => {
  const repository = await SportsEventsRepository();

  const eventToUpdate = await repository.findOne({ where: { id } });

  if (!eventToUpdate) {
    throw new NotFoundError("Event not found");
  }

  eventToUpdate.name = event.name ?? eventToUpdate.name;
  eventToUpdate.description = event.description ?? eventToUpdate.description;
  eventToUpdate.odds = event.odds ?? eventToUpdate.odds;

  return await repository.save(eventToUpdate);
};

export const deleteEvent = async (id: number): Promise<boolean> => {
  const repository = await SportsEventsRepository();
  const deletedResult = await repository.softDelete({id});
  return deletedResult.affected ? true : false;
};
