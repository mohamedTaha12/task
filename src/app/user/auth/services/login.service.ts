import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  login(body: any) {
    return this.http.post(environment.baseUrl + 'auth/login', body)
  }
  register(body: any) {
    return this.http.post(environment.baseUrl + 'auth/createAccount', body)
  }
}
