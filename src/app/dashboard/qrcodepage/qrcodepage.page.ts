import { Component, OnInit } from '@angular/core';
import { QrcodeService } from './qrcode.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcodepage',
  templateUrl: './qrcodepage.page.html',
  styleUrls: ['./qrcodepage.page.scss'],
})
export class QrcodepagePage implements OnInit {

  qrDetails: any[] = [];
  sessUserID: any;
  errorMessage: string = '';
  pageId: number = 1;
  qrProfileImg: any = '';
  qrCodeImg: any = '';
  initTime! : number;
  viewInitTime! : number;
  
  constructor(private qrService: QrcodeService, public dms: DomSanitizer) { }

  ngOnInit() {
    //this.initTime = window.performance.now()
    //console.log("ngOnInit - Time: ", this.initTime);
    this.sessUserID = sessionStorage.getItem('loggedUserID');
    //console.log('sessUserID: ', this.sessUserID);
    this.getQRDetails();    
  }

  getQRDetails() {
    console.log("inside qrDetails function");
    this.qrService.getQRDetails(this.pageId, this.sessUserID).subscribe((res: any) => {
      this.qrDetails = res.customer;
      //const imageProImage;
      //this.imageProImage = qrDetails.photo.base64String as string;
      this.qrProfileImg = res.customer.photo;
      this.qrCodeImg = res.customer.qrImage;
      console.log('qrDetails: ', this.qrDetails);
    });
    
    /*(
      (data) => {
        if (data.error) {
          this.errorMessage = data.ERROR;
        }
        else {
          //this.routerValue.navigateByUrl('/dashboard');
          this.qrDetails = data;
          console.log("qrDetails:",this.qrDetails);
        }
    });*/
    
    /*((res: any) => {
    this.qrDetails = res;
    console.log("qrDetails:",this.qrDetails);
    });*/
  }

  displayImage(imgString: any) {
    //conversion to base64
    return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64," + imgString);
  }

  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    //this.viewInitTime = window.performance.now();
    //console.log("ngAfterViewInit - Time: ", this.viewInitTime);
    console.log("QrPage PageLoad - Time: ", window.performance.now());
 }
 
}
