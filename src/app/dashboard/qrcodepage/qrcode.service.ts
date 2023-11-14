import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { map, finalize, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

interface sendUserDetails {
  sessUserID : string;
}

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  apiUrl = 'http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProfile';

  constructor(private http: HttpClient) { }

  getQRDetails(pageId: number, sessID: string) {
    console.log ("pageId:",pageId);
    console.log ("sessID:",sessID);
    //return this.http.get('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProfile?table=1',details)
    return this.http.get(`${this.apiUrl}?table=${pageId}&sesUserName=${sessID}`).pipe (
      map((res: any) => {
        console.log ("res:",res);
        return res;
      })
    );
      /*map((data) => {
      console.log ("data:",data);        
      return data;
    }),
    catchError((error) => {
      console.log ("error:",error);
      return error;
    })
  );*/
  }

}
