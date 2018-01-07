import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material-module/angular-material.module';
import { FirebaseModule } from '../firebase/firebase.module';
import { MapperService } from '../provider/mapper.service';
import { StoreService } from '../provider/store.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FirebaseModule, AngularMaterialModule],
  exports: [FirebaseModule, AngularMaterialModule],
  providers: [StoreService, MapperService]
})
export class SharedModule {}
