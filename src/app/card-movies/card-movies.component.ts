import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.scss']
})
export class CardMoviesComponent implements OnInit {
  @Input() movie;
  constructor() { }

  get dataFormatada(){
    if(this.movie.release_date != ''){
      const dataFormatada = this.movie.release_date.split('-');
      return dataFormatada[2] + '/' + dataFormatada[1] + '/' +dataFormatada[0]; 
    }
    return ;
  }


  ngOnInit() {
  }

}
