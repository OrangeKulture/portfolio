import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: Array<any> = [];

  constructor(private content: ContentService) {
  }

  ngOnInit() {
    this.content.fetchData()
      .subscribe((data) => {
        this.items = data;
      });

  }


  getWidth() {
    if (window.screen.width > 1224) {
      return '1000';
    }else if (window.screen.width > 700) {
      return '730';
    }else if (window.screen.width < 500) {
      return '300';
    }else {
      return '550';
    }
  }


}
