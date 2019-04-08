import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule.forRoot()
  ],
    declarations: [
        NotificationComponent
    ],
    exports: [
        NotificationComponent
    ]
})
export class ShareModule { }
