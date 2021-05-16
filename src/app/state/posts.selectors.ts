import { createSelector } from "@ngrx/store"
import { AppState } from "./app.state"
import { Post } from "../models/Post"

export const selectPosts = createSelector(
    (state: AppState) => state.posts,
    (posts: ReadonlyArray<Post>) => posts
)

export const selectPostsCollection = createSelector(
    selectPosts,
    (posts: ReadonlyArray<Post>) => {
        return posts
    }
)