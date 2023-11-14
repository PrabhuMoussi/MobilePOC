import { Component, OnInit } from '@angular/core';
import { BottommenuService } from './bottommenu.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { base64StringToBlob } from 'blob-util';

@Component({
  selector: 'app-bottommenu',
  templateUrl: './bottommenu.page.html',
  styleUrls: ['./bottommenu.page.scss'],
})
export class BottommenuPage implements OnInit {

  bottomDetails: any[] = [];
  initTime! : number;
  viewInitTime! : number;

  constructor(private bottomServices: BottommenuService, public dms: DomSanitizer) { }

  ngOnInit() : void {
    //this.initTime = window.performance.now()
    //console.log("ngOnInit - Time: ", this.initTime);
    this.getDashboardDetails();    
  }

  getDashboardDetails() {
    this.bottomServices.getDashboardDetails().subscribe((res: any) => {
    this.bottomDetails = res.BANNERIMAGES;
    });
  }

  displayImage(imgString: any) {
    //conversion to base64
    return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64," + imgString);
  }

  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    //this.viewInitTime = window.performance.now();
    //console.log("ngAfterViewInit - Time: ", this.viewInitTime);
    console.log("Dashboard PageLoad - Time: ", window.performance.now());
 }

}
