import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'applications',
  // template: '<h1>Hola {{name}}</h1><applications>hola 2</applications>',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  name = 'Angular';
  ngOnInit(): void {
  };
}

