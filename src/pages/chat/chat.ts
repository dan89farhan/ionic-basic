import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = "";
  message: string = "";
  _chatSubsciption;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    this._chatSubsciption = this.db.list('/chat').subscribe(data => {
      this.messages = data;
    });
  }

  sendMessage() {
    console.log(this.username);
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then(() => {

    }).catch(() => {

    });
    this.message = '';
  }


  ionViewWillLeave() {
    this._chatSubsciption.unsubscribe();
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has leave the room`
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ChatPage');
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has joined the room`
    });
  }

}
