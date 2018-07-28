import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {

  @Input() pokemon: any = {};

  constructor() { }

  ngOnInit() {
  }

}
