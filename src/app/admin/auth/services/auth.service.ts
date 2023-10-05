import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { LoginVM } from '../../core/login-vm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(body: LoginVM) {
    return this.http.post(environment.baseUrl + 'auth/login', body)
  }
}
