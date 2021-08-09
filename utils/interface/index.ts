export type AllOrNone<T> = T | Partial<Record<keyof T, never>>;

type Without<T> = { [P in keyof T]?: never };
export type XOR<T, U> = (Without<T> & U) | (Without<U> & T);
