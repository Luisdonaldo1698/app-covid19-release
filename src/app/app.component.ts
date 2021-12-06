import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
