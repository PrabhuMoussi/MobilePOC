import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UploadService } from './upload.service'
import { Form, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  routerValue : Router;
  errorMessage: string = '';
  orgDetails: any[] = [];
  uploadFormGroup : FormGroup;
  cameraOptions = {
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64
  };

  ImgPathV1 = "";
  imageUrl= "";

  sessionUserName: any;
  sessionDisplayUserName: any;

  profileImg: any = 'assets/images/photoupload.png'

  //initTime! : number;
  //viewInitTime! : number;

  constructor(private uploadService: UploadService, formBuilder: FormBuilder, router: Router ) { 
    this.routerValue = router;
    this.uploadFormGroup = formBuilder.group({
      firstName: "",
      lastName: "",
      orgName: "",
      photo: "",
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
    this.getOrgDetails();
    }

  async takePicture() {
      const image = await Camera.getPhoto(this.cameraOptions);
      console.log("Upload CameraLoad - Time: ", window.performance.now());
      console.log('image:',image)
                                  //this.ImgPathV1 = image.webPath as string;
                                  //var imageUrl = image.webPath;
      this.imageUrl = image.base64String as string;
      //console.log('imageUrl: ',imageUrl)
      this.profileImg = 'data:image/jpeg;base64,'+ this.imageUrl;
      //console.log('profileImg: ',this.profileImg);
      //this.uploadFormGroup.value.append('imgPath', this.profileImg);
      console.log("Upload - CameraOpen - Time: ", window.performance.now());
    }

    uploadFun() {      
      //this.sessionUserName = sessionStorage.getItem('loggedUser');
      let formData = this.uploadFormGroup.value;
      //formData.photo = this.ImgPathV1;
      formData.photo = this.imageUrl;
      formData.sesUserName = this.sessionUserName;
      console.log("formdata::",formData );
      //console.log("sesUserName::",this.sessionUserName);
      //console.log (" upload form values:", this.uploadFormGroup.value);
      this.uploadService.uploadFun(formData).subscribe(
      //this.routerValue.navigateByUrl('/changepass');
      (data) => {
        if (data.error) {        
          this.errorMessage = data.headers.statusText;
          console.log ("inside failure:",this.errorMessage)
        }
        else {
          this.routerValue.navigateByUrl('/changepass'); 
        }
      });
  }

  getOrgDetails () {
    this.uploadService.getOrgDetails().subscribe((res: any) => {
    this.orgDetails = res;
    //console.log('productList: ', res);
    })
  }

  ngAfterViewInit(){
    //console.log("Time until reaching run phase - ngAfterViewInit: ", Date.now());
    //this.viewInitTime = window.performance.now();
    //console.log("ngAfterViewInit - Time: ", this.viewInitTime);
    console.log("Upload PageLoad - Time: ", window.performance.now());
 }

}

