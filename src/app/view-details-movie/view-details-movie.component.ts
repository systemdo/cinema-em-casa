import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesPageService } from '../movies-page/movies-page.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-view-details-movie',
  templateUrl: './view-details-movie.component.html',
  styleUrls: ['./view-details-movie.component.scss']
})
export class ViewDetailsMovieComponent implements OnInit {
  movie;
  mensagemErro;
  videos: any;
  load: boolean;
  showMensagem: boolean; 

  constructor( 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private moviesPageService: MoviesPageService,
    private _sanitizer: DomSanitizer) { }

  findMovie(id){
    this.load = true;
    this.showMensagem = false;
    this.moviesPageService.findMovie(id).subscribe(
      movie =>{
        this.movie = movie;
        if(this.movie != undefined){
          this.findVideo(this.movie.id);
        }
        this.load = false;
        if ( this.movie.length == 0){
          this.mensagemErro = "Não foi encontrado nenhum filme com o termo buscado :)";
          this.showMensagem = true;
        }  
      },
      error => {
        this.load = false;
        this.mensagemErro = 'Ocorreu um erro, tente novamente, mais tarde';
        this.showMensagem = true;
      }
    );
  }

  get dataFormatada(){
    if(this.movie != undefined){
      if(this.movie.release_date != ''){
        const dataFormatada = this.movie.release_date.split('-');
        return dataFormatada[2] + '/' + dataFormatada[1] + '/' +dataFormatada[0]; 
      }
    }
    return ;
  }

  findVideo(id){
    
        this.moviesPageService.findVideo(id).subscribe(
          videos =>{
            this.videos = videos.results;
            this.videos.forEach(video => {
              if( video.site == 'YouTube'){
                video.urlVideo =  this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video.key);
              }
            });
          },
          error => {
            this.mensagemErro = 'Ocorreu um erro, tente novamente, mais tarde';
          }
        );
  }

  get imagePath(){
    if(this.movie != undefined){
      if ( this.movie.backdrop_path != undefined && this.movie.backdrop_path != '' && this.movie.backdrop_path != null){
        return 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+this.movie.backdrop_path
      }
    }
    
    return 'assets/moviedefault.jpg';
  }

  converterNumber(numero): any{
    if(numero != undefined) {
      const formatado = "$ " + numero.toFixed(2).replace(",",".");
      return formatado;
    }
    return '';
  }

  get idioma(){
    let lang = '';
    if(this.movie!= undefined) {
      switch (this.movie.original_language.toLowerCase()) {
        case 'de':
          lang = 'Alemão';
        break;
        case 'es':
          lang = 'Espanhol';
          break;
        case 'br':
          lang = 'Português';
          break;
        default:
          lang = 'Inglês';
          break;
      }
    }
    return lang ;
  }

  get duracao(): any{
    if(this.movie != undefined) {
      const array: Array<any> = this.movie.runtime.split('');
      return array[0] + 'h '+ array[1]+array[2]+' min';  
    }
    return '';
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        if(params != undefined){
           this.findMovie(params.id.trim());
        }
    });
  }

}
