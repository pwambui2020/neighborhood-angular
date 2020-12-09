import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
// import { Ng2Webstorage } from 'ngx-webstorage';
// import {NgxWebstorageModule} from 'ngx-webstorage';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HoodsComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,
    // NgxWebstorageModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
