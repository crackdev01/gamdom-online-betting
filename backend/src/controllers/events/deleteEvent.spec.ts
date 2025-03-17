// backend/src/controllers/events/__tests__/deleteEvent.test.ts
import request from 'supertest';
import express, { Express } from 'express';
import { deleteEventHandler, deleteEventArgumentValidator } from './deleteEvent';
import { sportsEventsService } from '../../services';
import HttpStatus from 'http-status';
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('../../services');

const app: Express = express();
app.use(express.json());
app.delete('/events/:id', deleteEventArgumentValidator(), deleteEventHandler);

describe('DELETE /events/:id', () => {
  it('should delete an event and return 200 status', async () => {
    (sportsEventsService.getEventById as jest.Mock).mockResolvedValue({ id: 1 } as never);
    (sportsEventsService.deleteEvent as jest.Mock).mockResolvedValue(true as never);

    const response = await request(app)
      .delete('/events/1')
      .expect(HttpStatus.OK);

    expect(response.body).toEqual({ deleted: true });
    expect(sportsEventsService.getEventById).toHaveBeenCalledWith(1);
    expect(sportsEventsService.deleteEvent).toHaveBeenCalledWith(1);
  });

  it('should return 404 if event does not exist', async () => {
    (sportsEventsService.getEventById as jest.Mock).mockResolvedValue(null as never);

    await request(app)
      .delete('/events/1')
      .expect(HttpStatus.NOT_FOUND);
  });

  it('should return 400 if id is not a number', async () => {
    await request(app)
      .delete('/events/not-a-number')
      .expect(HttpStatus.BAD_REQUEST);
  });
});