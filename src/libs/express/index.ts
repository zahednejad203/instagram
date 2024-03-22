import express from 'express';
import type { Express } from './type';
import type { Logger } from 'winston';

export function initialize(logger: Logger): Express {
	const app = express();
	const port = process.env.PORT || 3000;
    
	app.listen(port, () => {
		logger.info(`[server]: Server is running at http://localhost:${port}`);
	});

	(app as Express).logger = logger;
	(app as Express).core = express;
	return app as Express;
}