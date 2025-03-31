import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { DepositarModalModule } from './depositar-modal/depositar-modal.module';
import { RetirarModalModule } from './retirar-modal/retirar-modal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    DepositarModalModule,
    RetirarModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
