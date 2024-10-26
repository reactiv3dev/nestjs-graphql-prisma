
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    name: string;
    email: string;
}

export class User {
    id: string;
    name: string;
    email: string;
}

export abstract class IQuery {
    abstract allUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export abstract class IMutation {
    abstract createUser(input?: Nullable<CreateUserInput>): User | Promise<User>;
}

type Nullable<T> = T | null;
