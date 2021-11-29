import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Directives-Demo';
  attributeDirectiveStyle: any = {};
  constructor() {}
  ngOnInit(): void {
    this.attributeDirectiveStyle = {
      'font-weight': 'bold',
      color: 'green',
    };
  }
}
