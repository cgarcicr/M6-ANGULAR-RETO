import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaldoService } from '../../saldo.service'

@Component({
  selector: 'app-depositar-modal',
  templateUrl: './depositar-modal.component.html',
  styleUrl: './depositar-modal.component.scss'
})
export class DepositarModalComponent {

  @Input() showModal: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  monto: number = 0;
  numeroCuenta: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private saldoService: SaldoService) {}

  openModal(): void {
    this.showModal = true;
  }

  close(): void {
    this.monto = 0;
    this.numeroCuenta = '';
    this.showModal = false;
    this.closeModal.emit();
  }

  depositar(): void {
    const body = {
      numeroCuenta: this.numeroCuenta,
      monto: this.monto
    };
    const URL = 'http://localhost:8080/cuentas/depositobody';

    if(body.numeroCuenta !== '' && body.monto > 0) {
      this.http.post(URL, body)
      .subscribe({
        next: (response:any) => {
          this.successMessage = 'Depósito realizado con éxito';
          this.errorMessage = '';
          const nuevoSaldo = response.amount;
          this.saldoService.actualizarSaldo(nuevoSaldo)
          setTimeout(() => {
            this.close();
            this.monto = 0;
            this.numeroCuenta = '';
            this.successMessage = '';
          }, 1500);
        },
        error: (err) => {
          this.errorMessage = err.error;
          this.successMessage = '';
        }
      });
    }

  }

  closeAlert(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
