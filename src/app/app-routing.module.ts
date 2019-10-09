import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { PostsComponent } from './components/posts/posts.component'
import { PostComponent } from './components/post/post.component'
import { Post1Component } from './components/post1/post1.component'
import { AboutExtraComponent } from './components/about-extra/about-extra.component'
import { ErrorPageComponent } from './components/error-page/error-page.component'
import { AuthGuard } from './auth.guard'


// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
    {
      path: 'extra', component: AboutExtraComponent
    }
  ]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id', component: Post1Component},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
