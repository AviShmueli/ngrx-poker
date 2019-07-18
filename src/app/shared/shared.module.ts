import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './3rdParty/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule,
    MaterialModule
  ]
})
export class SharedModule { }
