import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { retrievedPostsList, loadPosts } from "../state/posts.actions"

@Injectable()
export class PostEffects {
    
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(loadPosts),
        mergeMap(() => this.postsService.getPosts().pipe(map(posts => retrievedPostsList({posts}))))
    ) )


    constructor(private actions$: Actions,
                private postsService: PostService){}
}