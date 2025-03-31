import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositarModalComponent } from './depositar-modal/depositar-modal.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DepositarModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DepositarModalComponent],
})
export class DepositarModalModule { }
