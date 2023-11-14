import { ChangeDetectionStrategy, Component, OnInit, Input, OnChanges} from '@angular/core';
import { ProductlistService } from './productlist.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

interface proData {
  Desc: string;
  Price: string;
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})

export class ProductlistPage implements OnInit, OnChanges {

  @Input() searchTxt = '';

  productDetails: any[] = [];
  pageId: number = 1;
  tableId: number = 1;
  searchTxtResult: string ='';
  initTime! : number;
  viewInitTime! : number;

  constructor(private productService: ProductlistService, public dms: DomSanitizer, private route: ActivatedRoute) {
    this.searchTxtResult = this.searchTxt;
   }

  ngOnInit(): void {
    //console.log('inside onInit function');
    //console.log('search text2:', this.searchTxt);
    //console.log("Time until reaching run phase: ", Date.now());
    //this.initTime = window.performance.now()
    //console.log("ngOnInit - Time: ", this.initTime);
 //   this.getProductDetails();
    this.route.queryParams.subscribe((params: Params) =>  {
      console.log('route: ', params)
      this.searchTxt = params['searchTxt'];
      console.log('this.searchTxt: ', this.searchTxt);
      this.getProductDetails();
    })
  }

  ngOnChanges() {
    // this.route.params.subscribe((params: Params) =>  {
    //   this.searchTxt = params['searchTxt'];
    //   console.log('this.searchTxt: ', this.searchTxt);
    //   this.getProductDetails();
    // })
  }

  getProductDetails() {
    console.log(this.pageId, this.tableId, this.searchTxt);
    this.productService.getProductDetails(this.pageId, this.tableId, this.searchTxt).subscribe((res: any) => {
      this.productDetails = res.PRODUCTS;
      console.log('productList: ', this.productDetails);
    });
  }

  GoToNextPage() {
    this.pageId = this.pageId + 1;
    this.getProductDetails();
  }

  GoToPreviousPage() {
    this.pageId = this.pageId - 1;
    this.getProductDetails();
  }
  /*getProductDetailsOnInit() {
    this.productService.getProductDetails().subscribe((res: any) => {
      this.productDetails = res.PRODUCTS;
      //console.log('productList: ', this.productDetails);
    });
  }*/
  displayImage(imgString: any) {
    //conversion to base64
    return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64," + imgString);
  }

  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    //this.viewInitTime = window.performance.now();
    //console.log("ngAfterViewInit - Time: ", this.viewInitTime);
    console.log("ProductList PageLoad - Time: ", window.performance.now());
 }
}

