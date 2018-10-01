import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesPageService {

  host =  "https://api.themoviedb.org/3/";
  apiSearch = 'search/movie';
  api_key = 'acf1ab8d1e9b2ba1eb457465b67c3b1b';

  constructor(private http: HttpClient) { 
  }

  public getMovies(query: string , page: number) {
    return this.http.get<any>(this.host+ this.apiSearch + '?api_key=' + this.api_key+'&language=pt-BR&region=BR&query=' + query + '&page='+page);
  }

  public getGenres() {
    return this.http.get<any>(this.host +'genre/movie/list' + '?api_key=' + this.api_key+'&language=pt-BR');
  }

  public findMovie(id) {
    return this.http.get<any>(this.host +`movie/${id}` + '?api_key=' + this.api_key+'&language=pt-BR');
  }
  public findVideo(id) {
    return this.http.get<any>(this.host +`movie/${id}/videos` + '?api_key=' + this.api_key+'&language=pt-BR');
  }

}
