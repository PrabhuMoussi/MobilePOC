import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';
import { defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//export class BottommenuService implements HttpInterceptor {
  export class BottommenuService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log("indie intercept function");
      return defer(() => {
        const key = req.urlWithParams;
        console.time(key);
        return next.handle(req).pipe(finalize(() => {
          console.timeEnd(key);
        }));
      });
    }

  constructor(private http: HttpClient) { }
  
  getDashboardDetails() {
    return this.http.get('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/dashboard').pipe (
      map((res: any) => {
        return res;
      })
    );
  }
}
