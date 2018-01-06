import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/do';

import { AngularFireService } from '../provider/angular-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _afService: AngularFireService, private _router: Router) {}

  login(): void {
    this._afService.logInWithGoogle().subscribe(
      (data: any) => {
        console.log(JSON.stringify(data));
      },
      err_msg => console.error(err_msg),
      () => this._router.navigate([''])
    );
  }
}
