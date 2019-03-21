import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Http import
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Providers
import { BaseModel } from './providers/utils/BaseModel';
import { AccessTokenResponse } from './providers/utils/accessTokenResponse';
import { AccessTokenRequest } from './providers/utils/accessTokenRequest';
import { AuthorizationRequest } from './providers/utils/authorizationRequest';
import { AuthService } from './providers/auth-service/auth-service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
      HttpModule,
      HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
      HttpModule,
      AuthService,
      AccessTokenResponse,
      AccessTokenRequest,
      AuthorizationRequest,
      BaseModel,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
