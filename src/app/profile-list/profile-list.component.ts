import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profiles: Array<any>;
  profile: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
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
}
