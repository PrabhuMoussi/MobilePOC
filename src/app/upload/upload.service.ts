import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

interface uploadDetails {
  firstName : string;
  lastName : string;
  orgName : string;
  photo : string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  detailsIn = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  uploadFun(details: uploadDetails): Observable<any> {
    //return this.http.post('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProfile?table=1',details)
    return this.http.post('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/saveCustomer?table=1',details)    
    /*.pipe(
      tap(() => {
        this.detailsIn.next(true);
      })
    )*/
    .pipe(map((data) => {
      console.log ("data:",data);        
      return data;
    }),
    catchError((error) => {
      console.log ("error:",error);
      return error;
  })
  );
}

  getOrgDetails() {
      return this.http.get('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getAllOrg').pipe (
      map((res: any) => {
        return res.ORGANISATION;
        console.log("Upload PageLoad - Time: ", window.performance.now());
      })
    );
  }

}
