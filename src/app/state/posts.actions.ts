import { createAction, props } from "@ngrx/store"
import { Post } from "../models/Post"

export const addPost = createAction(
    '[Post List] Add Post',
    props<{ Id:number }>()
)

export const removePost = createAction(
    '[Post Collection] Remove Post',
    props<{ Id:number }>()
)

export const retrievedPostsList = createAction(
    '[Post List/API] Retrieved Posts Success',
    props<{ post:Post[] }>()
)

