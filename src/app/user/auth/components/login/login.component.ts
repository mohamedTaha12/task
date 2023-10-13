import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  formLogin!: FormGroup
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService

  ) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.formLogin = this.fb.group({
      email: ['omar@user.com', [Validators.email, Validators.required]],
      password: ['12345', [Validators.required]],
      role: ['user']
    })
  }
  login() {
    this.loginService.login(this.formLogin.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['user/main/home'])
      console.log(res)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
    })
  }

}
