import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  FB_APP_ID: number = 812746379118791;
  registerForm: FormGroup;

  constructor(
    private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    public menuCtrl: MenuController,
    private data: DataService
  ) { }

  async doFbLogin(){
    
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    //the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

    this.fb.login(permissions)
    .then(response => {
      let userId = response.authResponse.userID;
      //Getting name and email properties
      //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions

      this.fb.api("/me?fields=name,email", permissions)
      .then(user => {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('facebook_user',
        {
          name: user.name,
          email: user.email,
          picture: user.picture
        })
        .then(() => {
          const formData = new FormData();
          formData.append('name', user.name);
          formData.append('email', user.email);
          formData.append('password', '123456');
          formData.append('image', user.picture);
          this.data.setUser(formData);
          this.router.navigate(["/home"]);
          loading.dismiss();
        }, error => {
          console.log(error);
          loading.dismiss();
        })
      })
    }, error =>{
      console.log(error);
      if(!this.platform.is('cordova')){
        this.presentAlert();
      }
      loading.dismiss();
    });
  }

  async doDefaultLogin(userEmail,userPassword){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    if(userEmail == 'admin' && userPassword == 'admin'){
      this.router.navigate(["/home"]);
      loading.dismiss();
    }else{
     console.log('incorrect credintials')
     loading.dismiss();
    }
    console.log(userEmail,userPassword);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

}
