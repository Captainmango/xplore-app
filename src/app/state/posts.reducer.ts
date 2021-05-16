import { createReducer, on, Action } from "@ngrx/store"
import { retrievedPostsList, loadPosts } from "./posts.actions"
import { Post } from "../models/Post"
import { AppState } from "./app.state"

export const initialState: AppState = {posts: []}

export const postsReducer = createReducer(
    initialState,
    on(retrievedPostsList, (state, { post }) => { post:[...post]}),
    on(loadPosts, (state) => [...state])
)