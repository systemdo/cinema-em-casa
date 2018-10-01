import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  @Input() carregando: boolean
  constructor() { }

  ngOnInit() {
  }

}
