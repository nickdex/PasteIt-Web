import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../../environments/environment';
import { FirebaseAuthService } from '../provider/firebase-auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'piw'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseAuthService]
})
export class FirebaseModule {}
