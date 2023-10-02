import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AdminLoginVM } from '../../core/models/admin-login-vm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  adminLogin(model: AdminLoginVM) {
    return this.http.post(environment.baseUrl + 'auth/login', model)
  }
}
