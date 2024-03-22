import express, {Express as ex, Request as exRequest, Response as exResponse } from 'express';
import type { Logger } from 'winston';
import { RedisClient } from '../redis/types';

export interface Express extends ex {
    logger: Logger;
    core: typeof express;
    redisClient: RedisClient;
} 
export interface Request<T=unknown> extends exRequest<T> {} 
export interface Response<T=unknown> extends exResponse<T> {} 