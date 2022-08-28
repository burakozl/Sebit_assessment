import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'category-page/:id', component: CategoryPageComponent},
  {path: 'post-detail/:id', component: PostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
