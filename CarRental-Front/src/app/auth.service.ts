import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getUserId(): number | null {
        const userId = localStorage.getItem('userId');
        return userId ? Number(userId) : null; 
    }
    

  setUserId(id: number): void {
    localStorage.setItem('userId', id.toString());
  }

  logout(): void {
    localStorage.removeItem('userId'); // Remove user ID on logout
  }
}
