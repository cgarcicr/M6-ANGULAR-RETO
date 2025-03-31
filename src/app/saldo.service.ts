import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  private saldoSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  saldo$ = this.saldoSubject.asObservable();

  constructor() { }

  actualizarSaldo(nuevoSaldo: number): void {
    this.saldoSubject.next(nuevoSaldo);
  }
}
