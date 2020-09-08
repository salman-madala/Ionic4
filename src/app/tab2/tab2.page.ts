import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  data: any;
  page = 1;
  country:any ='in';
  constructor(private router:Router,private newsService: NewsService) {}

  ngOnInit(){
   
  }
  allNews(){
    this.router.navigate(['/tabs/news',this.country]);
  }
 

}
