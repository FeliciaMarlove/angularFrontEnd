import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private userModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
      this.userModel = x;
    });
  }

  isAdmin(): boolean {
    if (this.userModel) {
      return this.userModel.roleId === 2;
    }
  }

}
