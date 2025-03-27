import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginsignupService {

  private username: string = '';
  private apiUrl = environment.apiUrl ;

  constructor(private http: HttpClient) { }

  registerStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, studentData, { responseType: 'text' as 'json' });
  }
  loginStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, studentData, { responseType: 'text' as 'json' });
  }

}
