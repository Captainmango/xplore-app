import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/models/Comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<Comment[]>

  constructor(private commentsService: CommentsService, public router: Router) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.getComments();
  }

}
