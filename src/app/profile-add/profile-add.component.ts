import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})
export class ProfileAddComponent implements OnInit {

  user: any;
  token: string;
  new_profile: any;

  constructor(private profileService: ProfileService,private router: Router) { }

  ngOnInit() {
    this.new_profile = {address:{}}
  }
  postProfile(frm: FormGroup){
    if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined){
      this.user = JSON.parse(localStorage.getItem('token'))
      this.token = this.user.token
      this.profileService.postProfile(this.new_profile,this.token).subscribe(resposta => {
        console.log(this.token)
        frm.reset()
        this.router.navigate(['perfis']);
      },
      )
    }
    else{
      console.log('Você precisa estar logado para realizar esta ação.')
    }
  }

}
