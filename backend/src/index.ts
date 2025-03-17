import bodyParser from "body-parser";
import express from "express";
import router from "routes";
import { errorHandlerMiddleware, requestLoggerMiddleware } from "middlewares";
import { DBConnect, logger } from "utils";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const databaseSetup = async (next: () => void) => {
  try {
    await DBConnect.getConnection();
    logger.info("Database connection successful");
    next();
  } catch (error) {
    logger.error(JSON.parse(JSON.stringify(error as Error)));
    logger.error("Database connection failed");
  }
};

databaseSetup(async () => {
  logger.info("Connected to the PostgreSQL database with TypeORM");

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(requestLoggerMiddleware);
  app.use("/api/v1", router);
  app.use(errorHandlerMiddleware);

  app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
  });
});
