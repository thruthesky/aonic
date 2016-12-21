import { Component } from '@angular/core';
@Component({
  selector: `app-component`,
  template: `
    <h1>Hello There ~ I am <b>A</b>onic!</h1>
  `
})
export class AppComponent {
  
  constructor() {
    document.addEventListener("deviceready", () => this.onDevinceReady(), false);
  }
  onDevinceReady() {
    console.log("yes, I am running in cordova.");
  }
  
}
