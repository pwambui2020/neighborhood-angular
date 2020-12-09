import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';


import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthorizeService]
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  user_info:any

  constructor(private auth: AuthorizeService,
    private route: Router ) { }

  ngOnInit() {
  }
  login(){
   this.user_info=new User()
   this.user_info.email=this.email
   this.user_info.password=this.password
    this.auth.getAuthToken(this.user_info)
  }

}
