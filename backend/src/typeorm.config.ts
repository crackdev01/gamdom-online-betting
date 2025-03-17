import { DataSourceOptions } from 'typeorm';
import { SportsEvent } from './entities';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

export const dbOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [SportsEvent],
  synchronize: true,
};

