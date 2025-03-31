import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response:any) => {
        if (response && response.username) {
          this.authService.setAuthentication(true);
          this.authService.setUserData(response);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Error de autenticación, intente de nuevo';
        }
      },
      error: (err) => {
        this.errorMessage = 'Error de autenticación, intente de nuevo';
        console.error(err);
      }
    });
  }

}
