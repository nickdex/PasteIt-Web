import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatListModule, MatCardModule],
  exports: [MatButtonModule, MatListModule, MatCardModule]
})
export class AngularMaterialModule {}
