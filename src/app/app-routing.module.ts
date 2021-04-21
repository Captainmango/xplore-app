import { NgModule } from '@angular/core';
import { PostsComponent } from '../app/components/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
