import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  user: any;
  token: string;
  profiles: Array<any>;
  profile: any;
  new_profile: any;
  
  

  constructor(private profileService: ProfileService,private router: Router) { }

  ngOnInit() {
    this.new_profile = {address:{}}
    this.getProfiles();
    
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
      let response = JSON.parse(localStorage.getItem('token'))
      console.log(response.token)
    }  
  }

  postProfile(frm: FormGroup){
    if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined){
      this.user = JSON.parse(localStorage.getItem('token'))
      this.token = this.user.token
      this.profileService.postProfile(this.new_profile,this.token).subscribe(resposta => {
        console.log(this.token)
        this.profiles.push(resposta)
        frm.reset()
      },
      )
    }
    else{
      console.log('Você precisa estar logado para realizar esta ação.')
    }
  }
}
