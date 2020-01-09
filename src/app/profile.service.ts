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
  postProfile(profile: any, token: string){
    return this.http.post(this.profilesUrl,profile,{headers:({'Content-Type':'application/json','Authorization':'Token ' + token})});
  }
  putProfile(pk: number,profile: any,token: string){
    return this.http.put(this.profilesUrl + pk +'/',profile,{headers:({'Content-Type':'application/json','Authorization':'Token ' + token})});
  }
  deleteProfile(pk: number,token: string){
    return this.http.delete(this.profilesUrl + pk,{headers:({'Content-Type':'application/json','Authorization':'Token ' + token})})
  }
}
