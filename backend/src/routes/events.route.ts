import express from "express";
import * as eventsController from "controllers";

const router = express.Router();

router.get(
  "/",
  eventsController.getEventsArgumentValidator(),
  eventsController.getEventsHandler
);

router.post(
  "/",
  eventsController.createEventArgumentValidator(),
  eventsController.createEventHandler
);

router.patch(
  "/:id",
  eventsController.updateEventArgumentValidator(),
  eventsController.updateEventHandler
);

router.delete(
  "/:id",
  eventsController.deleteEventArgumentValidator(),
  eventsController.deleteEventHandler
);

router.get(
  "/:id",
  eventsController.getEventByIdArgumentValidator(),
  eventsController.getEventByIdHandler
);

export default router;
