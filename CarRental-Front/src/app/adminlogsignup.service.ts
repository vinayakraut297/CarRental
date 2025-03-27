import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class AdminlogsignupService {

   private username: string = '';
    private apiUrl = environment.apiUrl ;
  
    constructor(private http: HttpClient) { }
  
    registerStudent(studentData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/admin/register`, studentData, { responseType: 'text' as 'json' });
    }
    loginStudent(studentData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/admin/login`, studentData, { responseType: 'text' as 'json' });
    }
}
