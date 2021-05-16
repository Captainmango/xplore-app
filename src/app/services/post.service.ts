import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Fallback url as jsonplaceholder decided it didn't want to work once
  // https://mockend.com/Captainmango/xplore-app/posts

  // JSONPlaceholder url - looks better and isn't complete gibberish
  // https://jsonplaceholder.typicode.com/posts
  
  postsURL: string = "https://jsonplaceholder.typicode.com/posts"



  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsURL)
  }

  getPost(postID:string): Observable<Post>{
    return this.http.get<Post>(`${this.postsURL}/${postID}`);
  }

  editPost(post:Post): Observable<any>{
    const url = `${this.postsURL}/${post.id}`
    return this.http.put(url, post, httpOptions)
  }

  deletePost(post:Post): Observable<any>{
    const url = `${this.postsURL}/${post.id}`
    return this.http.delete(url)
  }
}
