import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  formLogin!: FormGroup
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.formLogin = this.fb.group({
      email: ['mohamed@admin.com', [Validators.email, Validators.required]],
      password: ['12345', [Validators.required]],
      role: ['admin']
    })
  }
  login() {
    this.authService.login(this.formLogin.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['/main/tasks/list'])
    })
  }


}
