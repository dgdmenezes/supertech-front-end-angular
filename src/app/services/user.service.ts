import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/interfaces/Auth/AuthRequest';
import { AuthResponse } from '../models/interfaces/Auth/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL
  constructor(private http:HttpClient) { }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(
      `${this.API_URL}/users/login`, requestDatas
    )
  }
}
