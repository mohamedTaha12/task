import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AdminLoginVM } from '../../core/models/admin-login-vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup
  model!: AdminLoginVM
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.createFrom()
  }
  createFrom() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(5)]],
      role: ['admin'],
    })
  }
  login() {
    this.model = this.formLogin.value
    console.log(this.model)
    this.authService.adminLogin(this.formLogin.value).subscribe(res => {
      alert("hello")
    }, error => {
      alert("no")
    })
  }
  toRegister() {

  }
}
