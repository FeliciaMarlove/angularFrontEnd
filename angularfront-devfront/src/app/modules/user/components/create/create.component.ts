import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {UserModel} from "../../../../models/user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private nomU;
  private prenomU;
  private datenaissU;
  private emailU;
  private pwU;
  private newsletterU;
  private userModel: UserModel;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  inscrireUtilisateur() {
    // check fail !
    this.userModel = new UserModel();
    this.userModel.setUser(this.nomU, this.prenomU, this.datenaissU, this.emailU, this.pwU, this.newsletterU);
    this.userService.create(this.userModel).subscribe();
    this.router.navigateByUrl('login');
  }

}
