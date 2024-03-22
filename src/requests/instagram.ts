import axios from 'axios';

export async function getInstagramInformation(username: string) {
	return await axios.get(
		'https://i.instagram.com/api/v1/users/web_profile_info',
		{
			headers:{
				'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)'
			},
			params: {
				username
			}
		}
	);
}