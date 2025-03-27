import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsignupService } from '../loginsignup.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {
  isLogin = true; // Flag to toggle between Login and Register
  loginData = {
    email: '',
    password: '',
    errorMessage: ''
  };

  registerData = {
    name: '',
    email: '',
    password: '',
    errorMessage: ''
  };

  constructor(private loginsignup: LoginsignupService, private router: Router) { }

  showLogin() {
    this.isLogin = true;
  }

  showRegister() {
    this.isLogin = false;
  }


  // onLoginSubmit() {
  //   console.log('Login Data:', this.loginData);
  //   this.loginsignup.loginStudent(this.loginData)
  //     .subscribe(
  //       response => {
  //         console.log('Login successful:', response);
  //         window.alert("Login successful")
  //         localStorage.setItem('userId', response.userId);
  //         console.log('Stored userId:', response.userId);
  //         this.router.navigate(['/welcomedashboard']);  
  //       },
  //       error => {
  //         console.error('Login error:', error);
  //         if (error.status === 401) {
  //           window.alert("Invalid email or password. Please try again.")
  //           this.registerData.errorMessage = 'Invalid email or password. Please try again.';
  //         } else {
  //           this.registerData.errorMessage = 'An error occurred. Please try again later.';
  //         }
  //       }
  //     );
  // }

  onLoginSubmit() {
        this.loginsignup.loginStudent(this.loginData)
  .subscribe(
    (response: any) => {
      try {
        let jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
        if (jsonResponse && jsonResponse.userId !== undefined) {
          console.log('Login successful:', jsonResponse);
          window.alert("Login successful");
          localStorage.setItem('userId', String(jsonResponse.userId));
          this.router.navigate(['/welcomedashboard']);
        } else {
          console.error('Invalid response structure:', jsonResponse);
          window.alert("Unexpected error! Please try again.");
        }
      } catch (e) {
        console.error('Error parsing JSON response:', e);
        window.alert("Unexpected error! Please try again.");
      }
    },
    error => {
      console.error('Login error:', error);
      window.alert("Login failed! Please check your credentials.");
    }
  );
  }
    


  onRegisterSubmit() {
    console.log('Registration Data:', this.registerData);
    this.loginsignup.registerStudent(this.registerData)
      .subscribe(
        response => {
          console.log('Registration successful:', response);
          window.alert("Registration successful");
          this.isLogin = true;
        },
        error => {
          console.error('Registration error:', error);
          window.alert("Registration email already used or Registration error");
        }
      );
  }
}
