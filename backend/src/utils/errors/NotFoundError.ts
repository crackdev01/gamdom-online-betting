import HttpStatus from 'http-status';

import { CustomError } from './CustomError';

export class NotFoundError extends CustomError {
  constructor(message: string, reasonCode?: string) {
    super(message, HttpStatus.NOT_FOUND, reasonCode);
  }
}
