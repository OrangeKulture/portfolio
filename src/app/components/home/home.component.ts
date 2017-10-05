import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sumNums(2, 3);
  }

  sumNums(num1: number, num2: number) {
    return num1 + num2;
  }

}
