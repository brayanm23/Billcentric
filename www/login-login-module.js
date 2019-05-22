(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding class=\"transparent-header\">\n  <img class=\"logo\" src=\"assets/img/logo/logobillcentric.png\" />\n  <form [formGroup]=\"loginForm\">\n    <ion-item>\n      <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo\"></ion-input>\n    </ion-item>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.email\">\n        <div class=\"error-messages\" *ngIf=\"loginForm.get('email').hasError(error.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n          {{error.message}}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n    </ion-item>\n    <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.password\">\n          <div class=\"error-messages\" *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n            {{error.message}}\n          </div>\n        </ng-container>\n      </div>\n    <ion-button (click)=\"login()\" [disabled]=\"!loginForm.valid\" shape=\"round\" size=\"default\" color=\"danger\" expand=\"block\">Iniciar sesion</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 0.9em;\n  color: red;\n  text-align: left; }\n\n.logo {\n  padding-top: 150px;\n  margin: 0 auto;\n  padding-bottom: 20px; }\n\n/*page-login-one {\n    // Fullscreen centered image background\n    ion-content {\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      border-color: transparent;\n    }\n    .scroll-content {\n      background-image: radial-gradient(center center, ellipse cover, #ffeda3, #ffc800);\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n    }\n\n    .no-border {\n      border-bottom: 0 !important;\n      box-shadow: none !important;\n    }\n    ion-row {\n      align-items: center;\n      text-align: center;\n    }\n    @media only screen and (min-width: 768px) {\n      ion-col.col {\n        margin: 0 auto;\n        max-width: 40%;\n      }\n    }\n    span {\n      color: white;\n    }\n    ion-item {\n      // border-radius: 30px !important;\n      padding-left: 10px !important;\n      margin-bottom: 10px;\n      background-color: #f6f6f6;\n      opacity: 0.7;\n      font-size: 0.9em;\n    }\n    ion-list {\n      margin: 0;\n    }\n    .login-button {\n      width: 100%;\n      // border-radius: 30px;\n      font-size: 0.9em;\n      // border: 1px solid #fff;\n      background-color: #39acdc;\n    }\n  }*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYXlhbi9CaWxsY2VudHJpYy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFJRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQixFQUFBOztBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMrQ0kiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZXMge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmxvZ28ge1xuICAvL3dpZHRoOiA1MCU7XG4gIC8vaGVpZ2h0OiBhdXRvO1xuICAvL21heC13aWR0aDogMTJlbTtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4vKnBhZ2UtbG9naW4tb25lIHtcbiAgICAvLyBGdWxsc2NyZWVuIGNlbnRlcmVkIGltYWdlIGJhY2tncm91bmRcbiAgICBpb24tY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyIGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgI2ZmZWRhMywgI2ZmYzgwMCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLm5vLWJvcmRlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1yb3cge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgaW9uLWNvbC5jb2wge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICB9XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNkYztcbiAgICB9XG4gIH0qL1xuICAiLCIuZXJyb3ItbWVzc2FnZXMge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5sb2dvIHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cblxuLypwYWdlLWxvZ2luLW9uZSB7XG4gICAgLy8gRnVsbHNjcmVlbiBjZW50ZXJlZCBpbWFnZSBiYWNrZ3JvdW5kXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNlbnRlciBjZW50ZXIsIGVsbGlwc2UgY292ZXIsICNmZmVkYTMsICNmZmM4MDApO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5uby1ib3JkZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGlvbi1jb2wuY29sIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgfVxuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZGM7XG4gICAgfVxuICB9Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_utils_authorizationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/utils/authorizationRequest */ "./src/app/providers/utils/authorizationRequest.ts");
/* harmony import */ var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/auth-service/auth-service */ "./src/app/providers/auth-service/auth-service.ts");
/* harmony import */ var _providers_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/user/user.service */ "./src/app/providers/user/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_utils_alertas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/utils/alertas */ "./src/app/providers/utils/alertas.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, router, authService, userService, alertas, storage, toastController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.alertas = alertas;
        this.storage = storage;
        this.toastController = toastController;
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Correo es requerido.' },
                { type: 'pattern', message: 'Debe ingresar un correo valido.' }
            ],
            'password': [
                { type: 'required', message: 'Contraseña es requerida.' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required // ,
                // Validators.minLength(1),
                // Validators.pattern('^(?=.*[a-zA-Z]+$/')
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-z0-9-.]+$')
            ]))
        });
    }
    LoginPage.prototype.isValid = function (parameter) {
        return !this.loginForm.get(parameter).invalid;
    };
    LoginPage.prototype.presentToast = function (text, color) {
        if (color === void 0) { color = "primary"; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 2000,
                            color: color
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.alertas.showAutoHideLoader(); // presentLoadingDefault(); // this.presentLoadingDefault();
        console.log('email', this.loginForm.value.email);
        console.log('password', this.loginForm.value.password);
        if (this.isValid('email') && this.isValid('password')) {
            var authorizationRequest = new _providers_utils_authorizationRequest__WEBPACK_IMPORTED_MODULE_4__["AuthorizationRequest"]();
            authorizationRequest.grant_type = 'password';
            authorizationRequest.username = this.loginForm.get('email').value;
            authorizationRequest.password = this.loginForm.get('password').value;
            authorizationRequest.client_id = '2';
            this.authService.login(authorizationRequest).subscribe(function (authorizationResponse) {
                sessionStorage.setItem('token', authorizationResponse.access_token);
                _this.storage.set('token', authorizationResponse.access_token); // asiganamos el token para mantener sesion persistente 
                // sessionStorage.setItem('token', authorizationResponse.access_token);  viejo
                // console.log(authorizationResponse);
                _this.userService.getById(authorizationResponse.user_id).subscribe(function (user) {
                    localStorage.setItem('accessToken', JSON.stringify({ user: user, token: authorizationResponse.access_token }));
                    localStorage.setItem('currentData', JSON.stringify({ user: user, token: authorizationResponse.access_token }));
                    _this.alertas.dismiss();
                    _this.router.navigate(['/menu']);
                    _this.storage.set('isLoggedin', 'true');
                }, function (error) {
                    _this.alertas.dismiss();
                    _this.presentToast("Error de conexión", "danger");
                });
            }, function (error) {
                console.log(error);
                _this.alertas.dismiss();
                _this.presentToast(error, "danger");
            });
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _providers_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _providers_utils_alertas__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/providers/user/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/user/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService_1 = UserService;
    UserService.prototype.getById = function (id) {
        console.log(UserService_1.BASE_URL + '/' + id);
        return this.http.get(UserService_1.BASE_URL + '/' + id, { headers: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].createAuthorizationHeader() })
            .map(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].extractData)
            .catch(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].handleError);
    };
    UserService.prototype.getByEmail = function (email) {
        return this.http.get(UserService_1.BASE_URL + '/email/' + email, { headers: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].createAuthorizationHeader() })
            .map(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].extractData)
            .catch(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].handleError);
    };
    UserService.prototype.updatePassword = function (obj) {
        return this.http.patch(UserService_1.BASE_URL + '/' + obj.id + '/password', obj, { headers: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].createAuthorizationHeader() })
            .map(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].extractData)
            .catch(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].handleErrorUpdate);
    };
    var UserService_1;
    UserService.BASE_URL = _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].HOST + '/user';
    UserService = UserService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map