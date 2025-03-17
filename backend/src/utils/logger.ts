import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    level: 'info',
    defaultMeta: {
        service: 'online-betting-backend'
    },
    format: format.json(),
    transports: [new transports.Console()],
});
