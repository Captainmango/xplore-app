import { Post } from "../models/Post"

export interface AppState {
    posts: ReadonlyArray<Post>

}