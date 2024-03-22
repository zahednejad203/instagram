import express, {Express as ex, Request as exRequest, Response as exResponse } from 'express';
import type { Logger } from 'winston';

export interface Express extends ex {
    logger: Logger;
    core: typeof express;
} 
export interface Request extends exRequest {} 
export interface Response extends exResponse {} 