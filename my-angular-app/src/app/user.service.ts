import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  saveUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, user);
  }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/details`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, user);
  }
}
