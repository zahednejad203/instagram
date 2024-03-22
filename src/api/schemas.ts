import zod from 'zod';

export const UserProfile = zod.object({
	username: zod.string()
});
export type UserProfile = zod.infer<typeof UserProfile>;