import { createReducer, on} from "@ngrx/store"
import { retrievedPostsList, loadPosts } from "./posts.actions"
import { Post } from "../models/Post"

export interface PostsState {
    list: Post[],
    loading: boolean,

}

const initialState: PostsState = {
    list: [],
    loading: false
}

export const postsReducer = createReducer(
    initialState,
    on(retrievedPostsList, (state, { posts }) => ({list: [...posts], loading: false})),
    on(loadPosts, (state) => ({list: [], loading: true}))
)