import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//services
import { AuthRequest } from 'src/app/models/interfaces/Auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/Auth/AuthResponse';
import { UserService } from './../../../services/user.service';
//environments
import { environment } from 'src/environments/environment.prod';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  ngOnInit(): void {
    this.onSubmitLoginForm()
  }

  recivedToken = {} as AuthResponse

loginForm = this.formBuilder.group({
  email:["", Validators.required],
  password:["", Validators.required]
})

dadosSubmit:AuthRequest = {
  email:environment.email_test,
  password:environment.password_test
}

onSubmitLoginForm():void{
  this.userService.authUser(this.dadosSubmit as AuthRequest)
  .pipe(takeUntil(this.destroy$))
  .subscribe({
    next:(response)=>{
      this.recivedToken = response
      console.log(this.recivedToken);

    },
    error:(err)=>{
      console.log(err);

    }
  })
}

OnSubmit():void{
console.log("Submit");

}

constructor (
  private formBuilder:FormBuilder,
  private userService:UserService
  ){}

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
