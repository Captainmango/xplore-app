import { createReducer, on} from "@ngrx/store"
import { retrievedPostsList, loadPosts } from "./posts.actions"
import { Post } from "../models/Post"

const initialState: Array<Post> = []

export const postsReducer = createReducer(
    initialState,
    on(retrievedPostsList, (state, { posts }) => ([...state, ...posts])),
    on(loadPosts, (state) => ([...state]))
)