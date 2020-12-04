import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HoodsComponent } from './hoods/hoods.component';
import { ProfileComponent } from './profile/profile.component';

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
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
