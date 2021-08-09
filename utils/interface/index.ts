export type AllOrNone<T, TAllOrNone> =
  | (T & TAllOrNone)
  | (T & Partial<Record<keyof TAllOrNone, never>>);

type Without<T> = { [P in keyof T]?: never };
export type XOR<T, U> = (Without<T> & U) | (Without<U> & T);
