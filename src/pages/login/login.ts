import { LoggedinPage } from './../loggedin/loggedin';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message) {
    this.alertCtrl.create({
      title: 'Infor!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got some data ', this.fire.auth.currentUser);
        this.alert('Success! You\'re logged in');
        this.navCtrl.setRoot(LoggedinPage);

      })
      .catch(error => {
        console.log('got error ', error);
        this.alert('Error! ' + error);
      })
    console.log('Would sign in with ', this.user.value, this.password.value);
  }
}
