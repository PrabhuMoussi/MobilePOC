import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { dataURLToBlob } from 'blob-util';

interface signInCredentials {
  userName : string;
  password : string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  signedin = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

 login(details: signInCredentials): Observable<any> {
   console.log("details:",details);
    //return this.http.post('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getCustomer',details)
    return this.http.post('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getCustomer',details)
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
