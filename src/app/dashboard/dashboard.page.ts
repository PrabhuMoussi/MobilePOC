import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { base64StringToBlob } from 'blob-util';
import { IonInput, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

interface dashboardList {
  imgLit: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  routerValue : Router;
  userLoggedID: any;
  sessionUserName: any;
  searchProtDetails: any[] = [];
  searchTxt: string = '';
  
  
  //@ViewChild('inputElement', {static: false})

  //constructor(private dashboardServices: DashboardService, private sanitizer: DomSanitizer,private picture: SafeResourceUrl) { }
  constructor(private dashboardServices: DashboardService, router: Router) { 
    //this.searchTxt = this.searchText;  
    this.routerValue = router;
  }
  
  ngOnInit() {
    this.sessionUserName = sessionStorage.getItem('loggedUser');
    this.userLoggedID = sessionStorage.getItem('loggedUserID');
    console.log("sesUserName::",this.sessionUserName);
    console.log("userLoggedID::",this.userLoggedID);
  }  

  getSearchData () {
    console.log("search text1:",this.searchTxt);
    /*this.dashboardServices.getSearchData(this.searchTxt).subscribe((res:any) => {
      this.searchProtDetails = res.PRODUCTS;
      console.log('productList: ', this.searchProtDetails);*/
      this.routerValue.navigate(['/dashboard/productlist'], { queryParams: {searchTxt: this.searchTxt}}); 
    //});
  }

}
