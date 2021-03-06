import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileService } from './profile.service';
import { LoginComponent } from './login/login.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { Error404pageComponent } from './error404page/error404page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    LoginComponent,
    ProfileAddComponent,
    Error404pageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
