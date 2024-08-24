import { Component, OnDestroy, OnInit, Input } from '@angular/core';
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

  }

  recivedToken = {} as AuthResponse
  inputLoginEmail:string ="";
  InputLoginPassword:string ="";

// loginForm = this.formBuilder.group({
//   email:["", Validators.required],
//   password:["", Validators.required]
// })

//email:environment.email_test,
  //password:environment.password_test


onSubmitLoginForm():void{
  const dadosSubmit:AuthRequest = {
    email:this.inputLoginEmail,
    password:this.InputLoginPassword
  }
  this.userService.authUser(dadosSubmit as AuthRequest)
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


constructor (
  private formBuilder:FormBuilder,
  private userService:UserService
  ){}

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
