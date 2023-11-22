
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface NewPost {
    title: string;
    content: string;
}

export interface UpdatePost {
    id: string;
    published?: Nullable<boolean>;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    published?: Nullable<boolean>;
    createdAt: string;
}

export interface IQuery {
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export interface IMutation {
    createPost(input?: Nullable<NewPost>): Post | Promise<Post>;
    updatePost(input?: Nullable<UpdatePost>): Nullable<Post> | Promise<Nullable<Post>>;
    deletePost(id?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
