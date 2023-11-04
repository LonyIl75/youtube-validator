
export type OptionalKeys<T extends {}> = {
    [k in keyof T]: undefined extends T[k] ? k : never;
}[keyof T];
export type RequiredKeys<T extends object> = Exclude<keyof T, OptionalKeys<T>>;
export type MakePartial<T extends object> = {
    [k in OptionalKeys<T> as T[k] extends never ? never : k]?: T[k];
} & {
    [k in RequiredKeys<T> as T[k] extends never ? never : k]: T[k];
};
export type AnyObject = {
    [k: string]: any;
};

export type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;

export type makeOptionalIfNested< T > = {
    [P in keyof T]?: T[P] extends object ?  T[P] extends any[] ? T[P] extends Array<infer _T> ? makeOptionalIfNested<_T>[] : never : makeOptionalIfNested<T[P]> : T[P];
};

export type makeOptionalIfNested_top< T> = {
    [P in keyof T ] -?:  T[P] extends object ?makeOptionalIfNested<T[P]> : T[P];
}
