import { Component, OnInit } from '@angular/core';
import { MoviesPageService } from '../movies-page/movies-page.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  search = 'atlas';
  pageAtual = 1;
  mensagemErro;
  movies = new Array<any>();
  totalPages = 0;
  totalMovies = 0;
  genres = new Array<any>();
  pages =  new Array<any>();

  constructor(
    private moviesPageService: MoviesPageService
  ) { }

  searchMovies(){
    if (this.search.length > 3)  
      this.getMovies(this.search);
  }

  getMovies(query){
    this.moviesPageService.getMovies(query, this.pageAtual).subscribe(
      movies =>{
        this.movies = movies.results;
        this.totalPages = movies.total_pages;
        this.totalMovies= movies.total_results;
        this.pageAtual = movies.page;
        this.getAllGenres();
        this.getPages();
      },
      error => {
        this.mensagemErro = 'Ocorreu um erro, tente novamente, mais tarde';
      }
    );
  }

  getGenres(){
    this.moviesPageService.getGenres().subscribe(
      resp =>{
        this.genres = resp.genres;
      },
      error => {
        this.mensagemErro = 'Ocorreu um erro, tente novamente, mais tarde';
      }
    );
  }

  getGenresById(id): any{
    return this.genres.filter( genre => {
      if (genre.id == id)
        return genre;
    })[0];
  }

  getAllGenres(){
    this.movies.forEach((movie) =>{
      movie.genres = new Array<any>();
      movie.genre_ids.forEach(id => {
        movie.genres.push(this.getGenresById(id));
      });  
    });
  }
  
  getPages(){
    this.pages = new Array<any>();
    for ( let i = 1;  i <= this.totalPages; i++){
        this.pages.push({ page: i});
    }
  }

  searchByPage(page){
    this.pageAtual = page;
    this.searchMovies();
  }

  ngOnInit() {
    this.getGenres();
    this.searchMovies();
  }

}
