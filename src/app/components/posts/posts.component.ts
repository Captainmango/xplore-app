import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { never, Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { AppState } from 'src/app/state/app.state';
import { loadPosts, retrievedPostsList } from 'src/app/state/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts$:Observable<Post[]> = this.store.select(store => store.posts.list)

  p: number = 1

  constructor(private postService: PostService, public router: Router, private store: Store<AppState>) {  }

  ngOnInit(): void{
    this.store.dispatch(loadPosts())

  }

}
