import { NODE_ENV } from '../enum/enum';

interface IServerConfig {
  port: number;
  node_env: string | NODE_ENV;
}

interface IPostgresConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
}

interface IConfig {
  server: IServerConfig;
  postgres: IPostgresConfig;
  apiSecretKey: string;
}

export default IConfig;
