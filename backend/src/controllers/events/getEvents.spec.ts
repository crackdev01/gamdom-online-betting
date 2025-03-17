import request from 'supertest';
import express, { Express } from 'express';
import { getEventsHandler, getEventsArgumentValidator } from './getEvents';
import { sportsEventsService } from '../../services';
import HttpStatus from 'http-status';
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('../../services');

const app: Express = express();
app.use(express.json());
app.get('/events', getEventsArgumentValidator(), getEventsHandler);

describe('GET /events', () => {
  it('should return a list of events and status 200', async () => {
    const mockEvents = [
      { id: 1, name: 'Event 1', description: 'Description 1', odds: 1.5 },
      { id: 2, name: 'Event 2', description: 'Description 2', odds: 2.0 },
    ];
    (sportsEventsService.getEvents as jest.Mock).mockResolvedValue(mockEvents as never);

    const response = await request(app)
      .get('/events')
      .expect(HttpStatus.OK);

    expect(response.body).toEqual(mockEvents);
    expect(sportsEventsService.getEvents).toHaveBeenCalled();
  });

  it('should return an empty list if no events are found', async () => {
    (sportsEventsService.getEvents as jest.Mock).mockResolvedValue([] as never);

    const response = await request(app)
      .get('/events')
      .expect(HttpStatus.OK);

    expect(response.body).toEqual([]);
    expect(sportsEventsService.getEvents).toHaveBeenCalled();
  });
});
