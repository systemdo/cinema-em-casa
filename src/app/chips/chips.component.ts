import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  @Input() chip;
  constructor() { }

  ngOnInit() {
  }

}
