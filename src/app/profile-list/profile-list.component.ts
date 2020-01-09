import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  user: any;
  token: string;
  loggedUser: string;
  profiles: Array<any>;
  profile: any;
  new_profile: any;
  put_profile: any;
  
  

  constructor(private profileService: ProfileService,
  private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.new_profile = {address:{}}
    this.getProfiles();
    this.getUser();
    
  }

  getUser(){
    if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined ){
      this.loggedUser = JSON.parse(localStorage.getItem('token'))
    }
  }

  getProfiles(){
    this.profileService.getProfiles().subscribe(data =>{
      this.profiles = data
      console.log(data)
      }
      )
    }
  getProfile(pk: number){
    this.profileService.getProfile(pk).subscribe(data =>{
      this.profile = data
      console.log(data)
    })
  }
  putProfileForm(pk: number,frm: FormGroup){
    this.profileService.getProfile(pk).subscribe(data =>{
      this.put_profile = data
      console.log(this.put_profile)
    })
  }

  updateProfile(pk:number,profile:any){
    if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined ){
      this.user = JSON.parse(localStorage.getItem('token'))
      this.token = this.user.token
      console.log(this.user)
      profile = this.put_profile
      this.profileService.putProfile(pk,profile,this.token).subscribe(data =>{
        console.log(data)
      })
    }
  }

  deleteProfile(pk: number){
    if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined ){
      this.user = JSON.parse(localStorage.getItem('token'))
      this.token = this.user.token
      console.log(this.user)
      this.profileService.deleteProfile(pk,this.token).subscribe(data =>{
        console.log(data)
      })
    }
    else{
      console.log('Você precisa estar logado como dono desta postagem para realizar essa ação')
    }  
  }
  logout(){
    this.user = null;
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
