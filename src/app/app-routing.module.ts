import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HoodsComponent } from './hoods/hoods.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "profile",
    component: ProfileComponent 
  }, {
    path: "hoods",
    component: HoodsComponent
  }, {
    path: "login",
    component: LoginComponent
  },{
    path: "register",
    component: RegisterComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
