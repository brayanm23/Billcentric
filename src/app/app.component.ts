import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage} from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.style.scss']
})
export class AppComponent {
  /*public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Compañias',
      url: '/partner',
      icon: 'list'
    },
    {
      title: 'Reportes',
      url: '/reports',
      icon: 'list'
    }
  ];*/

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public storage: Storage,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      });
  }
  logout() {
      this.router.navigate(['/login']);
      // this.nav.setRoot(LoginPage); // Close this application
      localStorage.removeItem('currentData');
      localStorage.clear();
      sessionStorage.clear();
  }


}
