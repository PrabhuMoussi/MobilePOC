import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.page.html',
  styleUrls: ['./listpage.page.scss'],
})
export class ListpagePage implements OnInit {

  initTime! : number;
  viewInitTime! : number;

  constructor(private router:Router) { }

  ngOnInit() {
    //this.initTime = window.performance.now()
    //console.log("ngOnInit - Time: ", this.initTime);
  }

  takeToPage () {
    console.log("inside take to page function");
    this.router.navigateByUrl('/dashboard/productlist'); 
  }

  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    //this.viewInitTime = window.performance.now();
    //console.log("ngAfterViewInit - Time: ", this.viewInitTime);
    console.log("MenuList PageLoad - Time: ", window.performance.now());
 }

}
