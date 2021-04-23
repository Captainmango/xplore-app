import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Fallback url as jsonplaceholder decided it didn't want to work once
  // https://mockend.com/Captainmango/xplore-app/posts

  // JSONPlaceholder url - looks better and isn't complete gibberish
  // https://jsonplaceholder.typicode.com/posts
  
  postsURL: string = "https://mockend.com/Captainmango/xplore-app/posts"

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsURL);
  }
}
