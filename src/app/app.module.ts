import { ChatPage } from './../pages/chat/chat';



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';


var config = {
  apiKey: "AIzaSyDbAvQevAX8CGD5Ce8exjDNIcClgIjDq9I",
  authDomain: "ionic-chat-starter-fdd95.firebaseapp.com",
  databaseURL: "https://ionic-chat-starter-fdd95.firebaseio.com",
  projectId: "ionic-chat-starter-fdd95",
  storageBucket: "",
  messagingSenderId: "374822926985"
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '888f1e99'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),

    CloudModule.forRoot(cloudSettings),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
