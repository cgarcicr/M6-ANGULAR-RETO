import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {CuentasService} from '../../cuentas.service';
import { SaldoService } from '../../saldo.service';
import { Router   } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  accountBalance: number = 0;
  accountNumber: string = '';
  name: string = '';
  typeAccount: string = '';
  errorMessage: string = '';
  userData: any;
  accountId: string = '';

  showModal: boolean = false;
  showModalRetirar: boolean = false;

  transacciones: any[] = [];

  constructor(private readonly authService: AuthService,
    private readonly _cuentasService: CuentasService,
    private saldoService: SaldoService,
    private router: Router) {}

  ngOnInit(): void {
    this.userData = this.authService.getUserData();
    this.accountNumber = this.userData.numeroCuenta;
    this.accountBalance = this.userData.saldo;
    this.name = this.userData.nombre;
    this.typeAccount = this.userData.tipoCuenta;
    this.accountId = this.userData.cuentaId;
    setTimeout(() => {
      this.obtenerTransacciones();
    }, 1000);
  }

  obtenerTransacciones(): void {
    this._cuentasService.obtenerTransacciones(this.accountId).subscribe({
      next: (response: any) => {
        this.transacciones = response;
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar las transacciones.';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this._cuentasService.obtenerSaldo(this.accountNumber).subscribe(
      (response: any) => {
        this.accountBalance = response.saldo;
      }
    );
    this.obtenerTransacciones();
  }

  openModalRetirar(): void {
    this.showModalRetirar = true;
  }

  closeModalRetirar(): void {
    this.showModalRetirar = false;
    this._cuentasService.obtenerSaldo(this.accountNumber).subscribe(
      (response: any) => {
        this.accountBalance = response.saldo;
      }
    );
    this.obtenerTransacciones();
  }
}
