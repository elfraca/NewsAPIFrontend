import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopNewsComponent } from './pages/top-news/top-news.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'top-news', component: TopNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
