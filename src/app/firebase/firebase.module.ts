import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../../environments/environment';
import { FirebaseAuthService } from '../provider/firebase-auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'piw'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [AngularFireModule, AngularFirestoreModule, AngularFireAuthModule],
  providers: [FirebaseAuthService]
})
export class FirebaseModule {}
