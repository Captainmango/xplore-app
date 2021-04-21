import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html'
})
export class PostShowComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
