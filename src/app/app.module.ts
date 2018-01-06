import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './angular-material-module/angular-material.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FirebaseAuthService } from './provider/firebase-auth.service';
import { MapperService } from './provider/mapper.service';
import { StoreService } from './provider/store.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'piw'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'main', component: MainComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]),
    AngularMaterialModule
  ],
  providers: [FirebaseAuthService, StoreService, MapperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
