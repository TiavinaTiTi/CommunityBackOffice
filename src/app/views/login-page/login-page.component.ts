import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../shared/services/authenticationService/authentication.service";
import {switchMap} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  userFormGroup!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  authenticationService: AuthenticationService = inject(AuthenticationService)
  router: Router = inject(Router)

  invalidLogin: boolean = false;


  ngOnInit() {
    this.formLogin()
    this.isLoggedIn()
    let token = localStorage.getItem('access-token')
    if(token){
      this.authenticationService.loadProfile(token)
    }
  }

  formLogin(){
    this.userFormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  authenticate() {
    console.log('02')
    this.authenticationService.authenticate(this.userFormGroup.value.email, this.userFormGroup.value.password).pipe(
      switchMap(token => this.authenticationService.login(token))
    ).subscribe({
      next: value => (value) ? this.router.navigateByUrl("/dashboard") : this.invalidLogin = false,
      error: err => this.invalidLogin =true
    })
  }

  isLoggedIn(){
    if(this.authenticationService.isLoggedIn()){
      this.router.navigateByUrl("/dashboard")
    }else {
      console.log('er')
    }
  }

}
