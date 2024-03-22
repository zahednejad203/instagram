import { fromZodError } from 'zod-validation-error';
import { Express, Request, Response } from '../libs/express/type';
import { UserProfile } from './schemas';
import { send } from '../libs/http';

export default function start(server: Express): void {
	// server apis
    
	server.get('/', (req: Request, res: Response) => {
		res.send({success: true, message: 'hello world !!!!!'});
	});

	server.get('/user_profile', async (req: Request, res: Response) => {
		const paramsParse = UserProfile.safeParse(req.query);
		if (!paramsParse.success) {
			return res.send({
				success: false,
				message: fromZodError(paramsParse.error).toString()
			});
		}

		try {
			const result = await send(paramsParse.data.username);
			res.send({success: true, message: result.data});
			
		}catch(err) {
			res.send({success: false, message: 'failed to get the data !!!'});
		}
		
	});
}