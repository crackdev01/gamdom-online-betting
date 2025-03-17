import HttpStatus from 'http-status';

import { CustomError } from './CustomError';

export class BadRequestError extends CustomError {
  messages: string[];

  constructor(message: string, messages: string[], reasonCode?: string) {
    super(message, HttpStatus.BAD_REQUEST, reasonCode);

    this.messages = messages;
  }
}
