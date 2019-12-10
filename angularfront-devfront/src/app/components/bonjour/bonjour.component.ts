import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user-model";

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent implements OnInit {
  private curentUser: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
