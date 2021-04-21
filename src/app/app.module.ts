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

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    PostsComponent,
    HomeComponent,
    CommentsComponent,
    PostItemComponent
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
