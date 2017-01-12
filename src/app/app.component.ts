import { Component } from '@angular/core';
@Component({
  selector: `app-component`,
  template: `
    <router-outlet></router-outlet>
    <template ngbModalContainer></template>
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
