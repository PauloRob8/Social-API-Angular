import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authUrl = 'http://localhost:8000/api-token-auth/'

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post(this.authUrl,user,{headers:({'Content-Type':'application/json'})})
  }

}
