import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'perfis', component: ProfileListComponent},
  {path:'perfil-add',component: ProfileAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
