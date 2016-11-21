import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}