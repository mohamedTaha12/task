import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  formRegister!: FormGroup
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
    this.formRegister = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      role: ['user']
    })
  }
  register() {
    this.loginService.register(this.formRegister.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      // this.router.navigate(['user/main'])
      console.log(res)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
    })
  }


}
