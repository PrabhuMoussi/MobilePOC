import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiSearchUrl = 'http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProducts?page=1'

  constructor(private http: HttpClient) { }

  getDashboardDetails() {
    return this.http.get('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/dashboard').pipe (
      map((res: any) => {
        return res;
      })
    );
  }

  getSearchData(searchTxt: any) {
    return this.http.get(`${this.apiSearchUrl}?&name=${searchTxt}`).pipe (
      map((res: any) => {
        return res;
      })
    );
  }
}
