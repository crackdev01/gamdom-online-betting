import { SportsEvent } from "../../entities";
import { DBConnect } from "../dbConnector";

export const SportsEventsRepository = async () => {
    const connection = await DBConnect.getConnection();
    return connection.getRepository(SportsEvent);
};
