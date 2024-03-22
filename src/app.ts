import { initialize } from './libs/express';
import { initialize as redisInitialize } from './libs/redis';
import startAPI from './api/instagram';
import { logger } from './libs/logger/logger';
import startMiddleWare from './api/middleware';

const redisClient = redisInitialize();
const server = initialize(logger, redisClient);
startMiddleWare(server);
startAPI(server);

