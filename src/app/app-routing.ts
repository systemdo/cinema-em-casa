import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { ViewDetailsMovieComponent } from './view-details-movie/view-details-movie.component';

const appRoutes: Routes = [
  { path: '', component: MoviesPageComponent, pathMatch: 'full'},
  { path: 'movie/:id', component: ViewDetailsMovieComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {}
