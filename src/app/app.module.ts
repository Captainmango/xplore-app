import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from "@ngrx/store"

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
import { postsReducer } from "./state/posts.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effects/posts.effects';


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
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({posts: postsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
