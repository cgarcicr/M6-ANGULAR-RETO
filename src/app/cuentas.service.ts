import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private apiUrl = 'http://localhost:8080/cuentas';

  constructor(private http: HttpClient) { }

  obtenerSaldo(numeroCuenta: string): Observable<any> {
    const body = { 'numeroCuenta' : numeroCuenta };
    return this.http.post(this.apiUrl + '/saldo', body);
  }

  obtenerTransacciones(numeroCuenta: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${numeroCuenta}/transacciones`);
  }
}
