import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent implements OnInit {
  private userModel;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
      this.userModel = x;
      // pour accéder à "userModel" et à ses attributs par binding dans le html
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  update() {
    this.router.navigateByUrl('/dashboard/updateuser');
  }
}
