import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationRequest } from '../providers/utils/authorizationRequest';
import { AuthService } from '../providers/auth-service/auth-service';
import { UserService } from '../providers/user/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'email': [
      { type: 'required', message: 'Correo es requerido.'},
      { type: 'pattern', message: 'Debe ingresar un correo valido.'}
    ],
    'password': [
      { type: 'required', message: 'Contraseña es requerida.'}
    ],

  };

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    public userService: UserService,
    public storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required // ,
        // Validators.minLength(1),
        // Validators.pattern('^(?=.*[a-zA-Z]+$/')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-z0-9-.]+$')
      ]))
    });
  }

  isValid(parameter: string) {
        return !this.loginForm.get(parameter).invalid;
    }

  ngOnInit() {}

    login(): void {

        // this.alertas.presentLoadingDefault();
        console.log('email', this.loginForm.value.email);
        console.log('password', this.loginForm.value.password);

        if (this.isValid('email') && this.isValid('password')) {
            const authorizationRequest: AuthorizationRequest = new AuthorizationRequest();
            authorizationRequest.grant_type = 'password';
            authorizationRequest.username = this.loginForm.get('email').value;
            authorizationRequest.password = this.loginForm.get('password').value;
            authorizationRequest.client_id = '2';

            this.authService.login(authorizationRequest).subscribe(authorizationResponse => {
                sessionStorage.setItem('token', authorizationResponse.access_token);
                // sessionStorage.setItem('token', authorizationResponse.access_token);  viejo
                // console.log(authorizationResponse);
                this.userService.getById(authorizationResponse.user_id).subscribe(user => {
                    localStorage.setItem('accessToken', JSON.stringify({user: user, token: authorizationResponse.access_token}));
                    // localStorage.setItem('currentData', JSON.stringify({user: user, token: authorizationResponse.access_token}));
                    this.router.navigate(['/home']);
                    this.storage.set('isLoggedin', 'true');
                });
            }, error => {
                console.log('esto es un error');
                // this.alertas.presentAlert('Error','Email o Password es incorrectos, intente nuevamente');
            });
        }
    }

}
