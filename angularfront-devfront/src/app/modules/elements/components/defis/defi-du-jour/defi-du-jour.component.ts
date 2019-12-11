import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {DefiModel} from "../../../../../models/defi-model";
import {UserModel} from "../../../../../models/user-model";

@Component({
  selector: 'app-defi-du-jour',
  templateUrl: './defi-du-jour.component.html',
  styleUrls: ['./defi-du-jour.component.css']
})
export class DefiDuJourComponent implements OnInit {
  private defi;
  private user: UserModel;
  private userId: number;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
        this.user = x;
        this.userId = x.idUtilisateur;
        console.log(this.userId); // OK !
        this.showDefi();
      }
    );
  }

  showDefi() {
    this.userService.getDefiDuJour(this.userId).subscribe(
      x => {
        this.defi = x;
        console.log(this.defi); // OK
      }
    );
  }

}
