import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/models/interfaces/Auth/AuthRequest';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  ngOnInit(): void {
    this.onSubmitLoginForm()
  }

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
  .subscribe({
    next:(response)=>{
      console.log(response);

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

}
