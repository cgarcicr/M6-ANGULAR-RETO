import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositarModalModule } from '../depositar-modal/depositar-modal.module';
import { RetirarModalModule } from "../retirar-modal/retirar-modal.module";
import { FormatoSaldoPipe } from '../formato-saldo.pipe';

@NgModule({
  declarations: [DashboardComponent, FormatoSaldoPipe],
  imports: [
    CommonModule,
    RouterModule,
    DepositarModalModule,
    RetirarModalModule
],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
