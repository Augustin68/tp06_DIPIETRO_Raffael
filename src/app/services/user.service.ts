import { Injectable, inject } from '@angular/core';
import { CreateUser } from '../models/create-user.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginUserRequest } from '../models/login-user-request';
import { Observable } from 'rxjs';
import { LoginUserResponse } from '../models/login-user-response';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient = inject(HttpClient);
  authenticationService = inject(AuthenticationService);

  registerUser(user: CreateUser) {
    return this.httpClient.post(`${environment.API_URL}/auth/register`, user);
  }

  loginUser(user: LoginUserRequest): Observable<LoginUserResponse> {
    return this.httpClient.post<LoginUserResponse>(
      `${environment.API_URL}/auth/login`,
      user
    );
  }

  profile(): Observable<User> {
    const headers = {
      Authorization: `Bearer ${this.authenticationService.jwt}`
    };
    return this.httpClient.get<User>(`${environment.API_URL}/profile`, {
      headers
    });
  }
}
