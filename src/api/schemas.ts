import z from 'zod';

export const UserProfile = z.object({
	username: z.string(),
	force_update: z.string().optional(),
});
export type UserProfile = z.infer<typeof UserProfile>;

export const AccountInformation = z.object({
	biography: z.string().optional(),
	followers_count: z.number().optional(),
	recent_posts: z.array(z.object({
		comments: z.number().optional(),
		likes: z.number().optional(),
		type: z.enum(['image', 'video', 'carousel']).optional(),
		url: z.string().optional(),
	})).or(z.string()).optional(),
	name: z.string().optional(),
	timestamp: z.number().optional(),
});
export type AccountInformation = z.infer<typeof AccountInformation>;

type InstagramAccountResponse = {
    data: {
        user:{
            username?: string;
            biography?: string;
            edge_followed_by?: {
                count?: number;
            }
			is_private?: boolean;
            edge_owner_to_timeline_media ?: {
                edges ?: {
                    node?: {
                        is_video ?: boolean;
                        taken_at_timestamp ?: number;
                        display_url ?: string; 
                        edge_liked_by ?: {
                            count ?: number;
                        };
                        edge_media_to_comment ?: {
                            count ?: number;
                        };
                    }
                }[];
            };
        }
    }
}

export const AccountInformationProcessed = z.preprocess((val) => {
	const response = (val as InstagramAccountResponse)?.data?.user;
	/*
        sort the timeline posts based on their timestamp from newest to oldest 
        and take the first three and convert them in the specified data schema 
    */
	const recent_posts = response?.edge_owner_to_timeline_media?.edges && Array.isArray(response?.edge_owner_to_timeline_media?.edges)? 
		(response.edge_owner_to_timeline_media.edges)
			.sort(
				(a,b) => (b?.node?.taken_at_timestamp || 0) - (a?.node?.taken_at_timestamp || 0)
			).slice(0,3).map((post) => ({
				comments: post?.node?.edge_media_to_comment?.count,
				likes: post?.node?.edge_liked_by?.count,
				type: post?.node?.is_video ? 'video' : 'image',
				url: post?.node?.display_url,
			})):[];
	return {
		biography: response.biography,
		followers_count: response?.edge_followed_by?.count,
		recent_posts: response.is_private? 'This Account is private or Does not have any recent posts': recent_posts,
		name: response.username,
		timestamp: Date.now(),
	};        
}, AccountInformation);