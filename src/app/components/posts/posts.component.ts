import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts!: Post[]

  constructor(private postService: PostService, public router: Router) { }

  ngOnInit(): void{
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    });
  }

}
