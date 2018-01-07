import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseAuthService } from '../provider/firebase-auth.service';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _afService: FirebaseAuthService, private _router: Router) {}

  login(): void {
    this._afService
      .logInWithGoogle()
      .subscribe(
        data => console.log(JSON.stringify(data)),
        err_msg => console.error(err_msg),
        () => this._router.navigate(['/main'])
      );
  }
}
