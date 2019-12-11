import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../models/user-model";
import {LoginModel} from "../models/login-model";
import {Observable} from "rxjs";

const URI = 'http://localhost:8080/api/utilisateurs/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listAllUsers() {
    return this.http.get(URI);
  }

  setInactiveUser(id) {
    return this.http.post(URI + 'desactiver/' + id, httpOptions);
  }

  setActiveUser(id) {
    return this.http.post(URI + 'activer/' + id, httpOptions);
  }

  createUser(user: UserModel) {
    return this.http.post(URI + 'creer', JSON.stringify(user), httpOptions);
  }

  login(logins: LoginModel) {
    const loginDto = {};
    loginDto['email'] = logins.email;
    loginDto['password'] = logins.password;
    return this.http.post(URI + 'login', JSON.stringify(logins), httpOptions);
  }

  getUserFromMail(email: string): any {
    return this.http.get(URI + email);
  }

  getDefiDuJour(idUtil): any {
    return this.http.get('http://localhost:8080/api/utilparc/defi/' + idUtil);
  }
}
