import { fromZodError } from 'zod-validation-error';
import { Express, Request, Response } from '../libs/express/type';
import { AccountInformation, AccountInformationProcessed, UserProfile } from './schemas';
import { getInstagramInformation } from '../requests/instagram';
import { AckResult } from './types';

export default function start(server: Express): void {
	// server apis
    
	server.get('/', (req: Request, res: Response) => {
		res.send({success: true, message: 'hello world !!!!!'});
	});

	server.get('/user_profile', async (req: Request, res: Response<AckResult<AccountInformation>>) => {
		const paramsParse = UserProfile.safeParse(req.query);
		if (!paramsParse.success) {
			return res.send({
				success: false,
				message: fromZodError(paramsParse.error).toString()
			});
		}

		try {
			const redisResponse = await server.redisClient.safeGet<AccountInformation>(paramsParse.data.username);
			if(redisResponse.success && paramsParse.data.force_update !== 'true') {
				return res.send({success: true, data: redisResponse.data});
			}

			// throws an error in case of failure
			const response = await getInstagramInformation(paramsParse.data.username);
			
			const parsedData = AccountInformationProcessed.safeParse(response.data);
			if(!parsedData.success) {
				return res.send({success: false, message: fromZodError(parsedData.error).toString()});
			}

			// if the key doesn't exist or the user forced an update update the redis cache and set the expiration to 24hrs
			server.redisClient.set(paramsParse.data.username, JSON.stringify(parsedData.data), 'EX', 24*60*60);
			return res.send({success: true, data: parsedData.data});
		}catch(err) {
			server.logger.error(err);
			res.send({success: false, message: 'failed to get the data !!!'});
		}
		
	});
}