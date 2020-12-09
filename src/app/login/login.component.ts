import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
// import { localStorageService } from 'ngx-webstorage';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthorizeService]
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private auth: AuthorizeService
    ,private route: Router ) { }

  ngOnInit() {
  }
  login(){
    this.auth.getAuthToken(this.email, this.password).then(res=>{
      if(res.valid){
        this.localStorageService.store('user',res);
        this.route.navigate(['home']);

      }
      else{
        alert(" login failed ");
      }
    })
    
  }

}
