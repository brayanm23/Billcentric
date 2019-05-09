import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class AlertService {

    loading: any;
    isLoading = false;

    constructor(public loadingController: LoadingController
    ) { }
    showAutoHideLoader() {
        this.loadingController.create({
            spinner: 'lines',
            message: 'Autenticando',
        }).then((res) => {
            res.present();
        });
    }

    showLoader() {
        this.loadingController.create({
            spinner: 'lines',
            message: 'Cargando',
        }).then((res) => {
            res.present();
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    }

 }
