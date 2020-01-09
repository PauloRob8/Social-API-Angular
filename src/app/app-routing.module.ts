import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { Error404pageComponent } from './error404page/error404page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'perfis', component: ProfileListComponent},
  {path:'perfil-add',component: ProfileAddComponent},
  { path: '', redirectTo: '/perfis', pathMatch: 'full' },
  {path:'**',component: Error404pageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
