import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  sal:any;

  constructor(private newsSer:NewsService) {

  }

ngOnInit(){
  console.log("haii"); 
console.log(this.newsSer.temp.name);
}


}
