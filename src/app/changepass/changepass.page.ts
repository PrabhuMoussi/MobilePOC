import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ChangePassService } from './change-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {
  passFormGroup : FormGroup;
  passwordDetails: any[] = [];
  sessionUserName: any;
  sessionDisplayUserName: any;
  errorMessage: string = '';
  routerValue : Router;
  initTime! : number;
  viewInitTime! : number;

  constructor(private passDetails: ChangePassService, formBuilder: FormBuilder, router: Router) { 
    this.routerValue = router;
    this.passFormGroup = formBuilder.group({
      oldPassword: "",
      newPasswordA: "",
      newPasswordB: "",
      sesUserName: ""
    })
  }

  ngOnInit() {
    //this.initTime = window.performance.now()
    //console.log("ngOnInit - Time: ", this.initTime);
    this.sessionUserName = sessionStorage.getItem('loggedUserID');
    this.sessionDisplayUserName = sessionStorage.getItem('loggedUser');
    //console.log("sesUserName::",this.sessionUserName);
    //console.log("sessionDisplayUserName::",this.sessionDisplayUserName);
  }

  passFun() {
    //console.log (" Changepass form values:", this.passFormGroup.value);
    let formData = this.passFormGroup.value;
    formData.sesUserName = this.sessionUserName;
    //console.log (" upload form values:", this.passFormGroup.value);
    this.passDetails.passFun(this.passFormGroup.value).subscribe(
      (data) => {
        if (data.error) {
          this.errorMessage = data.ERROR;
        }
        else {
          this.routerValue.navigateByUrl('/dashboard');
        }
    });
  }

  goToBack() {
    this.routerValue.navigateByUrl('/upload');
  }

  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    //this.viewInitTime = window.performance.now();
    //console.log("ngAfterViewInit - Time: ", this.viewInitTime);
    console.log("Changepass PageLoad - Time: ", window.performance.now());
 }
 
}
