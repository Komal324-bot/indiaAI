import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showLoginPopup: boolean = false;
  showRegisterPopup: boolean = false;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.router.navigate(['/dashboard']);
    }
  }

  submitRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    alert('Registration successful! You can now log in.');
    this.showRegisterPopup = false;
    this.clearForm();
  }

  submitLogin() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (this.email === storedEmail && this.password === storedPassword) {
      alert('Login Successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }

  clearForm() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
