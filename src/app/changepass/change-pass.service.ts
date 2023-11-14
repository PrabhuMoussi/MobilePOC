import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

interface changepassDetails {
  oldPassword : string;
  newPasswordA : string;
  newPasswordB : string;
}

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {

  detailsPass = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }


  passFun(details: changepassDetails): Observable<any> {
    return this.http.post('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/savePassword?table=1',details)
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
}