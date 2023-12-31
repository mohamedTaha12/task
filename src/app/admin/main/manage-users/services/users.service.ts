import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeStatusVM } from 'src/app/admin/core/models/change-status-vm';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }
  getAllUsers() {
    return this.http.get(environment.baseUrl + "auth/users")
  }
  deleteUser(userId: string) {
    return this.http.delete(environment.baseUrl + "auth/user/" + userId)
  }
  changeStatus(body: ChangeStatusVM) {
    return this.http.put(environment.baseUrl + "auth/user-status", body)
  }
}
