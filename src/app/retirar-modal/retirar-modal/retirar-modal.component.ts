import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaldoService } from '../../saldo.service'

@Component({
  selector: 'app-retirar-modal',
  templateUrl: './retirar-modal.component.html',
  styleUrl: './retirar-modal.component.scss'
})
export class RetirarModalComponent {

  @Input() showModal: boolean = false; // Controla si el modal está visible o no
  @Output() closeModalRetirar: EventEmitter<void> = new EventEmitter();
  monto: number = 0;
  numeroCuenta: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  maxSaldo: number = 0;  // Este valor debe obtenerse desde la respuesta del backend

  constructor(private http: HttpClient, private saldoService: SaldoService) {}

  openModal(): void {
    this.showModal = true;
  }

  close(): void {
    this.monto = 0;
    this.numeroCuenta = '';
    this.showModal = false;
    this.closeModalRetirar.emit();
  }

  retirar(): void {
    const body = {
      numeroCuenta: this.numeroCuenta,
      monto: this.monto
    };

    const URL = 'http://localhost:8080/cuentas/retirarbody';

    if (body.numeroCuenta !== '' && body.monto > 0 ) {
      this.http.post(URL, body)
      .subscribe({
        next: (response: any) => {
          this.successMessage = 'Retiro realizado con éxito';
          this.errorMessage = '';
          const nuevoSaldo = response.amount;
          this.saldoService.actualizarSaldo(nuevoSaldo);
          setTimeout(() => {
            this.close();
            this.monto = 0;
            this.numeroCuenta = '';
            this.successMessage = '';
          }, 2000);
        },
        error: (err) => {
          this.errorMessage = err.error;
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Campos incorrectos';
      setTimeout(() => {
        this.errorMessage = '';
      }, 1500);
    }
  }

  closeAlert(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

}
