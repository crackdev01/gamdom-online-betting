import request from 'supertest';
import express, { Express } from 'express';
import { getEventByIdHandler, getEventByIdArgumentValidator } from './getEventById';
import { sportsEventsService } from '../../services';
import HttpStatus from 'http-status';
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('../../services');

const app: Express = express();
app.use(express.json());
app.get('/events/:id', getEventByIdArgumentValidator(), getEventByIdHandler);

describe('GET /events/:id', () => {
  it('should return an event and status 200', async () => {
    const mockEvent = { id: 1, name: 'Test Event', description: 'Test Description', odds: 1.5 };
    (sportsEventsService.getEventById as jest.Mock).mockResolvedValue(mockEvent as never);

    const response = await request(app)
      .get('/events/1')
      .expect(HttpStatus.OK);

    expect(response.body).toEqual(mockEvent);
    expect(sportsEventsService.getEventById).toHaveBeenCalledWith(1);
  });

  it('should return 404 if event does not exist', async () => {
    (sportsEventsService.getEventById as jest.Mock).mockResolvedValue(null as never);

    await request(app)
      .get('/events/1')
      .expect(HttpStatus.NOT_FOUND);

    expect(sportsEventsService.getEventById).toHaveBeenCalledWith(1);
  });

  it('should return 400 if id is not a number', async () => {
    await request(app)
      .get('/events/not-a-number')
      .expect(HttpStatus.BAD_REQUEST);
  });
});
