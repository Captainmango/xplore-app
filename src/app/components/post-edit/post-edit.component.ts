import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from "../../models/Post";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  @Input() post$!: Observable<Post>
  

  postID = this.route.snapshot.params.id

  onChange = (target: EventTarget | null):string => {
    return (target as HTMLInputElement).value
  }

  editPost = (post:Post) => {
    this.post$ = this.postService.editPost(post)
  }

  deletePost = (post:Post) => {
    this.post$ = this.postService.deletePost(post)
  }

  ngOnInit(): void {
    this.post$ = this.postService.getPost(this.postID)
  }

}
