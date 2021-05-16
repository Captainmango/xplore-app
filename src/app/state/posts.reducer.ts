import { createReducer, on, Action } from "@ngrx/store"
import { retrievedPostsList } from "./posts.actions"
import { Post } from "../models/Post"

export const initialState: ReadonlyArray<Post> = []

export const postsReducer = createReducer(
    initialState,
    on(retrievedPostsList, (state, { post }) => [...post])
)