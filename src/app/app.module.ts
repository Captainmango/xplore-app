import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostShowComponent } from './components/post-show/post-show.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    PostsComponent,
    HomeComponent,
    CommentsComponent,
    PostItemComponent,
    PostShowComponent,
    PostEditComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
