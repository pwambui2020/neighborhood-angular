import { Injectable } from '@angular/core';
// import {  HttpClientModule} from '@angular/common/Http';
import 'rxjs/add/operator/toPromise'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http:HttpClient) { }

  getAuthToken(email,password){
    return this.http.post('http://localhost:4200/api/v1/login', {"email":email, "password":password})
    .toPromise()
    .then(function(res){
      return res.json()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
