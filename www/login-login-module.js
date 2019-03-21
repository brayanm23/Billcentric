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

module.exports = ".error-messages {\n  font-size: 0.9em;\n  color: red;\n  text-align: left; }\n\n/*page-login-one {\n    // Fullscreen centered image background\n    ion-content {\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      border-color: transparent;\n    }\n    .scroll-content {\n      background-image: radial-gradient(center center, ellipse cover, #ffeda3, #ffc800);\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n    }\n    .logo {\n      width: 50%;<!-- -->\n      height: auto;\n      max-width: 12em;\n      margin: 0 auto;\n      padding-bottom: 50px;\n    }\n    .no-border {\n      border-bottom: 0 !important;\n      box-shadow: none !important;\n    }\n    ion-row {\n      align-items: center;\n      text-align: center;\n    }\n    @media only screen and (min-width: 768px) {\n      ion-col.col {\n        margin: 0 auto;\n        max-width: 40%;\n      }\n    }\n    span {\n      color: white;\n    }\n    ion-item {\n      // border-radius: 30px !important;\n      padding-left: 10px !important;\n      margin-bottom: 10px;\n      background-color: #f6f6f6;\n      opacity: 0.7;\n      font-size: 0.9em;\n    }\n    ion-list {\n      margin: 0;\n    }\n    .login-button {\n      width: 100%;\n      // border-radius: 30px;\n      font-size: 0.9em;\n      // border: 1px solid #fff;\n      background-color: #39acdc;\n    }\n  }*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYXlhbi9IZWN0aWN1cy9CaWxsY2VudHJpYy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdURJIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2VzIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLypwYWdlLWxvZ2luLW9uZSB7XG4gICAgLy8gRnVsbHNjcmVlbiBjZW50ZXJlZCBpbWFnZSBiYWNrZ3JvdW5kXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNlbnRlciBjZW50ZXIsIGVsbGlwc2UgY292ZXIsICNmZmVkYTMsICNmZmM4MDApO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogNTAlOzwhLS0gLS0+XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDEyZW07XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAubm8tYm9yZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBpb24tY29sLmNvbCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2RjO1xuICAgIH1cbiAgfSovXG4gICIsIi5lcnJvci1tZXNzYWdlcyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLypwYWdlLWxvZ2luLW9uZSB7XG4gICAgLy8gRnVsbHNjcmVlbiBjZW50ZXJlZCBpbWFnZSBiYWNrZ3JvdW5kXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNlbnRlciBjZW50ZXIsIGVsbGlwc2UgY292ZXIsICNmZmVkYTMsICNmZmM4MDApO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogNTAlOzwhLS0gLS0+XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDEyZW07XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAubm8tYm9yZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBpb24tY29sLmNvbCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2RjO1xuICAgIH1cbiAgfSovXG4iXX0= */"

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



var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder) {
        this.formBuilder = formBuilder;
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required //,
                //Validators.minLength(1),
                //Validators.pattern('^(?=.*[a-zA-Z]+$/')
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-z0-9-.]+$')
            ]))
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        console.log('email', this.loginForm.value.email);
        console.log('password', this.loginForm.value.password);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map