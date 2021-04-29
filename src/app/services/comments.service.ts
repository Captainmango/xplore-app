import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsURL:string = "https://jsonplaceholder.typicode.com/comments"; 

  constructor(private http: HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentsURL)
  }

}
