import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent implements OnInit {
  private userModel;
  private email;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
      this.userModel = x;
      //pour accéder à "userModel" et à ses attributs par binding dans le html
    });
  }

  getLogin() {

    return JSON.parse(localStorage.getItem('user')).login; //retourne l'email de l'utilisateur connecté (setté dans login.ts)
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }




}
