import { initialize } from './libs/express';
import startAPI from './api/instagram';
import { logger } from './libs/logger/logger';
import startMiddleWare from './api/middleware';

const server = initialize(logger);
startMiddleWare(server);
startAPI(server);
