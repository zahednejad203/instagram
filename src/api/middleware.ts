import { Express } from '../libs/express/type';
export default function startMiddleWare(server: Express) {
	server.use(server.core.json());
	server.use(server.core.urlencoded({extended: false}));
}