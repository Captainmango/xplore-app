import { NgModule } from '@angular/core';
import { PostsComponent } from '../app/components/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostShowComponent } from './components/post-show/post-show.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [
    {path: 'posts/:id', component: PostsComponent}
  ]},
  {path: 'posts/:id', component: PostShowComponent},
  {path: 'posts/:id/edit', component: PostEditComponent},
  {path: 'comments', component: CommentsComponent},
  {path: '', component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
