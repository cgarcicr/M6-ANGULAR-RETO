import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RetirarModalComponent } from './retirar-modal/retirar-modal.component';

@NgModule({
  declarations: [RetirarModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RetirarModalComponent],
})
export class RetirarModalModule { }
