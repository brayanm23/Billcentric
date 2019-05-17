import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private router: Router,
        public storage: Storage 
    ) { }
    logout() {
        this.router.navigate(['/login']);
        // this.nav.setRoot(LoginPage); // Close this application
        localStorage.removeItem('currentData');
        localStorage.clear();
        sessionStorage.clear();
        this.storage.clear();
    }
}
