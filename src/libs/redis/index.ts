import { Redis } from 'ioredis';
import { logger } from '../logger/logger';
import { AckResult } from '../../api/types';

declare module 'ioredis' {
	interface Redis {
		safeGet: typeof safeGet;
	}
}

export function initialize() {
	const client = new Redis(
		{
			port: parseInt(process.env.REDIS_PORT || '6379'),
			host: process.env.REDIS_HOST || 'localhost',
			keyPrefix: process.env.KEY_PREFIX || 'inst:',
			retryStrategy: retries => Math.min(retries * 50, 1000),
		})
		.on('connect', () => {
			logger.info('Connected to the Reids !!!');
		})
		.on('error', () => {
			logger.info('Error while connecting to the Redis');
		});

	return client;
}
/* 
	It gets a key and returns the result. it has been added to the redis interface.
	@param {string} key - the redis key
	@return {AckResult} - the result of the redis query
*/
function safeGet<T>(this:Redis, key: string) {
	return new Promise<AckResult<T>>((resolve) => {
		this.get(key, (err, result) => {
			if (err) {
				return resolve({success: false, message: err.message});
			}

			if(!result) return resolve({success: false, message: 'data does not exist !!!'});

			try{
				const data = JSON.parse(result);
				resolve({success: true, data: data});
			}catch(ex) {
				return resolve({success: false, message: 'data not valid !!!'});
			}
		});
	});
}
Redis.prototype.safeGet = safeGet;