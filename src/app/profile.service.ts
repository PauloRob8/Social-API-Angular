import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profilesUrl = 'http://localhost:8000/profiles/';

  constructor(private http: HttpClient ) { }

  getProfiles(){
    return this.http.get<Array<any>>(`${this.profilesUrl}`);
  }

  getProfile(pk: number){
    return this.http.get<Array<any>>(`${this.profilesUrl + pk}`)
  }
}
