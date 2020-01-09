import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit() {
    this.user ={}
  }
  login(frm: FormGroup){
    this.loginService.login(this.user).subscribe(resposta =>{
      this.user = resposta;
      localStorage.setItem('token', JSON.stringify(resposta));
      console.log(localStorage.getItem('token'));
      frm.reset();
      this.router.navigate(['perfis'])
    })
  }

}
