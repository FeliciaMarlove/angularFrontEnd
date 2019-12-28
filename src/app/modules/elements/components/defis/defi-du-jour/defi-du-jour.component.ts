import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {DefiModel} from "../../../../../models/defi-model";
import {UserModel} from '../../../../../models/user-model';
import {ParcoursService} from '../../../../../services/parcours.service';

@Component({
  selector: 'app-defi-du-jour',
  templateUrl: './defi-du-jour.component.html',
  styleUrls: ['./defi-du-jour.component.css']
})
export class DefiDuJourComponent implements OnInit {
  private defi;
  private user: UserModel;
  private userId: number;
  private userRole: number;
  private parcUtilLiaisons;

  constructor(private userService: UserService, private parcoursService: ParcoursService) { }

  ngOnInit() {

    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
        this.user = x;
        this.userId = x.idUtilisateur;
        this.userRole = x.roleId;
        console.log('/defi du jour/ Id utilisateur : ' + this.userId);
        this.showDefi();
      }
    );
  }

  showDefi() {
    this.userService.getDefiDuJour(this.userId).subscribe(
      x => {
        this.defi = x;
        console.log('/defi du jour/ Defi du jour : ' + this.defi);
      }
    );
  }

  getParcoursUtilisateursLiaisons() {
    this.parcoursService.listParcoursUtilisateursLiaison().subscribe(x => this.parcUtilLiaisons = x);
  }

}
