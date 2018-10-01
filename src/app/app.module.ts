import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

import { AppRouting } from './app-routing';
import { CardMoviesComponent } from './card-movies/card-movies.component';
import { MoviesPageService } from './movies-page/movies-page.service';
import { FormsModule } from '@angular/forms';
import { AvarageComponent } from './avarage/avarage.component';
import { ChipsComponent } from './chips/chips.component';
import { ViewDetailsMovieComponent } from './view-details-movie/view-details-movie.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    CardMoviesComponent,
    AvarageComponent,
    ChipsComponent,
    ViewDetailsMovieComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoviesPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
