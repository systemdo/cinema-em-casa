import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avarage',
  templateUrl: './avarage.component.html',
  styleUrls: ['./avarage.component.scss']
})
export class AvarageComponent implements OnInit {
  @Input() valor;
  @Input() diametro = '55px';
  @Input() radio= '30px';
  @Input() size = '1em';
  @Input() border = 'solid 3px #00e8e4';
  constructor() { }

  ngOnInit() {
    if (this.radio!= undefined){

    }
  }

}
