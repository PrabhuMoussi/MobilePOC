import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  apiUrl = 'http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProducts';

  constructor(private http: HttpClient) { }

  getProductDetails(pageId: number, tableId: number, searchTxt?: string) {
    console.log("pageId:",pageId)
    console.log("tableId:",tableId)
    console.log("searchTxt:",searchTxt)
    // return this.http.get('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProducts?page=1&table=1').pipe (
    //return this.http.get(`${this.apiUrl}?page=${pageId}&table=${tableId}&name=${searchTxt}`).pipe (
      if (searchTxt?.length ==0 || searchTxt == undefined) {
        console.log("11111:")
        return this.http.get(`${this.apiUrl}?page=${pageId}&table=${tableId}`).pipe (
        map((res: any) => {
        console.log ("res:",res);
        return res;
        })
      );
      }
      else {
        console.log("2222:")
        return this.http.get(`${this.apiUrl}?page=${pageId}&table=${tableId}&name=${searchTxt}`).pipe (
          map((res: any) => {
          console.log ("res:",res);
          console.log("ProductList SearchLoad - Time: ", window.performance.now());
          return res;
          })
        );
      }

  }
}
