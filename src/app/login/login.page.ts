import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup : FormGroup;
  routerValue : Router;
  errorMessage: string = '';
  userDisplayName: any;
  userLoggedID: any;
  initTime! : number;
  viewInitTime! : number;

  constructor(private loginService: LoginService,formBuilder : FormBuilder, router: Router ) { 
    this.routerValue = router;
    this.loginFormGroup = formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    console.log("ngOnInit - Time: ", this.initTime);
  }

  login () {
    console.log (" login form values:", this.loginFormGroup.value);
    /*this.loginService.login(this.loginFormGroup.value).subscribe(() => {
    this.routerValue.navigateByUrl('/upload');
    });*/
    this.loginService.login(this.loginFormGroup.value)
    .subscribe(
     /*(data) => {
        console.log("ts data:",data.ERROR);
      }*/
     (data) => {
      if (data.ERROR) {        
        this.errorMessage = data.ERROR;
        //console.log ("inside failure:",this.errorMessage)
      }
      else {
        //console.log ("inside success:")
        //sessionStorage.setItem('loggedUser',data.customer.firstName+data.customer.lastName);
        sessionStorage.setItem('loggedUser',data.customer.firstName.concat(''+ data.customer.lastName));
        sessionStorage.setItem('loggedUserID',data.customer.userName);
        this.userDisplayName = sessionStorage.getItem('loggedUser');
        this.userLoggedID = sessionStorage.getItem('loggedUserID');
        console.log ("userDisplayName:", this.userDisplayName);
        console.log ("userLoggedID:", this.userLoggedID);
        this.routerValue.navigateByUrl('/upload');    
      }
    });
  }
  
  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    this.viewInitTime = window.performance.now();
    console.log("ngAfterViewInit - Time: ", this.viewInitTime);
 }
 
}
