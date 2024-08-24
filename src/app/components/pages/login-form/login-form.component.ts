import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
//services
import { AuthRequest } from 'src/app/models/interfaces/Auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/Auth/AuthResponse';
import { UserService } from './../../../services/user.service';
//environments
import { environment } from 'src/environments/environment.prod';
//PrimeNG
import { Message } from 'primeng/api';

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
  messages!: Message[];

// loginForm = this.formBuilder.group({
//   email:["", Validators.required],
//   password:["", Validators.required]
// })

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
      this.messages = [{ severity: 'success', summary: 'Tudo Certo', detail: 'Entrada Validada' }]

    },
    error:(err)=>{
      console.log(err);
      this.messages = [{ severity: 'error', summary: 'Erro', detail: 'Email e/ou senha incorretos', life: 1000 }]
      this.inputLoginEmail = ""
      this.InputLoginPassword = ""
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
