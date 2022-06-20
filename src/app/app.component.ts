<<<<<<< HEAD
import { Component } from '@angular/core';
import { AngularFireMessaging} from '@angular/fire/compat/messaging';
import { AngularFirestore} from '@angular/fire/compat/firestore';


=======
import { Component, HostListener } from '@angular/core';
>>>>>>> d41f93d3b18de6a669002d8b995912029464e8ff

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {
<<<<<<< HEAD
  

  
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
=======
  installEvent: any = null;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event){
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(){
    if(this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoice.then((resp: any) => {
        console.log(resp);
      });
    }
  }
>>>>>>> d41f93d3b18de6a669002d8b995912029464e8ff
}
}