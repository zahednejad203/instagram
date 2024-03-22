export type AckSuccess<T=unknown> = {success: true, data?: T};
export type AckFail<T=unknown> = {success: false, message?: string, data?: T};
export type AckResult<T=unknown> = AckSuccess<T> | AckFail<T>;