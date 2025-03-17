import HttpStatus from 'http-status';

export class CustomError extends Error {
  statusCode: number;
  reasonCode: string;

  constructor(message: string, statusCode?: number, reasonCode?: string) {
    super();

    this.message = message;
    this.statusCode = statusCode ? statusCode : HttpStatus.BAD_REQUEST;
    this.reasonCode = reasonCode ? reasonCode : '';
  }
}
