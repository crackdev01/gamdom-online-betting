import request from 'supertest';
import express, { Express } from 'express';
import { updateEventHandler, updateEventArgumentValidator } from './updateEvent';
import { sportsEventsService } from '../../services';
import HttpStatus from 'http-status';
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('../../services');

const app: Express = express();
app.use(express.json());
app.put('/events/:id', updateEventArgumentValidator(), updateEventHandler);

describe('PUT /events/:id', () => {
  it('should update an event and return status 200', async () => {
    const mockEvent = { id: 1, name: 'Updated Event', description: 'Updated Description', odds: 2.0 };
    (sportsEventsService.getEventById as jest.Mock).mockResolvedValue(mockEvent as never);
    (sportsEventsService.updateEvent as jest.Mock).mockResolvedValue(mockEvent as never);

    const response = await request(app)
      .put('/events/1')
      .send({ name: 'Updated Event', description: 'Updated Description', odds: 2.0 })
      .expect(HttpStatus.OK);

    expect(response.body).toEqual(mockEvent);
    expect(sportsEventsService.getEventById).toHaveBeenCalledWith(1);
    expect(sportsEventsService.updateEvent).toHaveBeenCalledWith(1, { name: 'Updated Event', description: 'Updated Description', odds: 2.0 });
  });

  it('should return 404 if event does not exist', async () => {
    (sportsEventsService.getEventById as jest.Mock).mockResolvedValue(null as never);

    await request(app)
      .put('/events/1')
      .send({ name: 'Updated Event' })
      .expect(HttpStatus.NOT_FOUND);
  });

  it('should return 400 if id is not a number', async () => {
    await request(app)
      .put('/events/not-a-number')
      .send({ name: 'Updated Event' })
      .expect(HttpStatus.BAD_REQUEST);
  });

  it('should return 400 if odds is not a number', async () => {
    await request(app)
      .put('/events/1')
      .send({ odds: 'not-a-number' })
      .expect(HttpStatus.BAD_REQUEST);
  });
});
