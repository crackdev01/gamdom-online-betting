import express from 'express';
import eventsRouter from './events.route';

const router = express.Router();

router.use('/events', eventsRouter);

export default router;