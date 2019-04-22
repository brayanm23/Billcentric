import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

// Http import
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


// Providers
import { BaseModel } from './providers/utils/BaseModel';
import { TableService } from './providers/utils/pager';
import { AccessTokenResponse } from './providers/utils/accessTokenResponse';
import { AccessTokenRequest } from './providers/utils/accessTokenRequest';
import { AuthorizationRequest } from './providers/utils/authorizationRequest';
import { AuthService } from './providers/auth-service/auth-service';
import { AlertService } from './providers/utils/alertas';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
      IonicStorageModule.forRoot(),
      AppRoutingModule,
      HttpModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
      HttpModule,
      AuthService,
      AccessTokenResponse,
      AccessTokenRequest,
      AlertService,
      AuthorizationRequest,
      BaseModel,
      TableService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
