import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiURL = environment.baseApiUrl

  constructor(
    private http: HttpClient,
  ) { }

  createUser(userData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/user`, userData)
  }

  userLogin(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/login`, { email, password })
  }
}
