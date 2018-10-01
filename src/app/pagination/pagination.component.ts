import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page ;
  @Input() pageSelecionada = 1;
  @Output() onPage = new EventEmitter<any>();
  selecionado: boolean;
  constructor() { }

  select(){
    this.onPage.emit(this.page);
  }
  ngOnInit() {
    console.log(this.pageSelecionada, 'pageSelecionada');
    if(this.page == this.pageSelecionada){
        this.selecionado = true;
    }else{
      this.selecionado = false;
    }
    console.log(this.page,'page');
  }

}
