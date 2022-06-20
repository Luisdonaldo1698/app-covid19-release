import { Component } from '@angular/core';
import { AngularFireMessaging} from '@angular/fire/compat/messaging';
import { AngularFirestore} from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {
  

  
constructor(

  
  private messaging: AngularFireMessaging,

  ){
  }

  ngOnInit(){
  this.requestPermission();
  this.listenNotifications();
  

}

requestPermission(){
this.messaging.requestToken
.subscribe(token => {
  console.log(token);
});
}
listenNotifications(){
  this.messaging.messages
  .subscribe(message =>{
    console.log(message);
    
  });
}
}