import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: string = '';
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    // Initialize the form
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Fetch logged-in user's email from local storage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.email = storedEmail;
      this.userForm.patchValue({ email: storedEmail }); // Autofill email in form
    } else {
      this.router.navigate(['/']); // Redirect to login if email is not found
    }
  }

  saveUserDetails() {
    if (this.userForm.valid) {
      const userDetails = this.userForm.value;
      console.log('User details saved:', userDetails);

      // Optionally send this data to a backend or save it to localStorage
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      alert('User details saved successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('userDetails'); // Optional: Clear user details
    this.router.navigate(['/']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
