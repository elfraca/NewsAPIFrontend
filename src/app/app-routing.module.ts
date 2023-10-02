import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsStoriesComponent } from './pages/news-stories/news-stories.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news-stories', component: NewsStoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
