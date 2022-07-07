import * as dotenv from 'dotenv';
import * as path from 'path';
import { NODE_ENV } from './enum/enum';
import IConfig from './interface/interfaces';

dotenv.config({
  path: path.resolve('.env'),
});

const { env } = process;

const config: IConfig = {
  server: {
    port: +env.HTTP_PORT || 3000,
    node_env: env.NODE_ENV || NODE_ENV.development,
  },
  postgres: {
    host: env.PG_HOST || 'localhost',
    port: +env.PG_PORT || 5432,
    user: env.PG_USER || 'postgres',
    password: env.PG_PASSWORD || '1234',
    dbName: env.dbName || 'media',
  },

  apiSecretKey: `b"r8DOvX%oX</kmjf7u)|o~Yb+J+"&fn]7(:d8V_i$zD3Y*rqV8J)/th&@np`,
};

export default config;
