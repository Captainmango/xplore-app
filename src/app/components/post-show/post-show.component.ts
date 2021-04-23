import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html'
})
export class PostShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  post!: Post

  postID = this.route.snapshot.params.id

  // TODO: work out how to make this async. The mark up updates as expected, but the console shows undefined errors.

  ngOnInit(): void {
    this.postService.getPost(this.postID).subscribe(post => {
      this.post = post
    })

    console.log(this.post)
  }

}
