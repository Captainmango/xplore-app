import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html'
})
export class CommentItemComponent implements OnInit {

  @Input() comment!: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
