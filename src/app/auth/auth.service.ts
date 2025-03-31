import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private apiUrl = 'http://localhost:8080/cuentas/login';
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, body).pipe(
      catchError(() => {
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  setAuthentication(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  setUserData(userData: any): void {
    this.userSubject.next(userData);
  }

  getUserData(): any {
    return this.userSubject.value;
  }
}
