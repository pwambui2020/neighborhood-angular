import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MDB Angular Free
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HoodsComponent } from './hoods/hoods.component';
import { LoginComponent } from './login/login.component';
import bootstrap from "bootstrap";
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HoodsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
