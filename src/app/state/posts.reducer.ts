import { createReducer, on, Action } from "@ngrx/store"
import { retrievedPostsList, loadPosts } from "./posts.actions"
import { Post } from "../models/Post"
import { AppState } from "./app.state"

const initialState: Array<Post> = []

export const postsReducer = createReducer(
    initialState,
    on(retrievedPostsList, (state, { post }) =>  ([...state, post])),
    on(loadPosts, (state) => ([...state]))
)