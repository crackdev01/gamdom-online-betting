import request from 'supertest';
import express, { Express } from 'express';
import { createEventHandler, createEventArgumentValidator } from './createEvent';
import { sportsEventsService } from '../../services';
import HttpStatus from 'http-status';
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('../../services');

const app: Express = express();
app.use(express.json());
app.post('/events', createEventArgumentValidator(), createEventHandler);

describe('POST /events', () => {
  it('should create an event and return 201 status', async () => {
    const mockEvent = { name: 'Test Event', description: 'Test Description', odds: 1.5 };
    (sportsEventsService.createEvent as jest.Mock).mockResolvedValue(mockEvent as never);

    const response = await request(app)
      .post('/events')
      .send(mockEvent)
      .expect(HttpStatus.CREATED);

    expect(response.body).toEqual(mockEvent);
    expect(sportsEventsService.createEvent).toHaveBeenCalledWith(mockEvent);
  });

  it('should return 400 if name is missing', async () => {
    const response = await request(app)
      .post('/events')
      .send({ description: 'Test Description', odds: 1.5 })
      .expect(HttpStatus.BAD_REQUEST);
  });

  it('should return 400 if odds is not a number', async () => {
    const response = await request(app)
      .post('/events')
      .send({ name: 'Test Event', description: 'Test Description', odds: 'not-a-number' })
      .expect(HttpStatus.BAD_REQUEST);
  });
}); 