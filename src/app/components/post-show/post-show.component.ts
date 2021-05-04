import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html'
})
export class PostShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  @Input() post$!: Observable<Post>
  

  postID = this.route.snapshot.params.id

  // TODO: work out how to make this async. The mark up updates as expected, but the console shows undefined errors.

  ngOnInit(): void {
    this.post$ = this.postService.getPost(this.postID)
  }

}
