import { Injectable } from '@angular/core';
// import {  HttpClientModule} from '@angular/common/Http';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http:HttpClient) { }

  getAuthToken(login_info){
    // return this.http.post('http://localhost:4200/api/v1/login', {"email":email, "password":password})
    // .toPromise()
    // .then(function(res){
    //   return res
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    try {
      let token = this.http.post('http://127.0.0.1:8000/api/login/',login_info).subscribe((data) => {
        console.log(data)
      });
  
      return token;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }
}
