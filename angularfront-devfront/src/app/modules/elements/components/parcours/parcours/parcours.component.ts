import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {ParcoursService} from "../../../../../services/parcours.service";

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {
  private parcUtilLiaisons;
  private userModel;
  private userId;

  constructor(private userService: UserService, private parcoursService: ParcoursService) { }

  ngOnInit() {
    this.getParcoursUtilisateursLiaisons();
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
      this.userModel = x;
      this.userId = x.idUtilisateur;
      console.log(this.userId); // OK !
    }
    );
  }

  getParcoursUtilisateursLiaisons() {
    this.parcoursService.listParcoursUtilisateursLiaison().subscribe(x => this.parcUtilLiaisons = x);
  }

  start(idUtil, idParc) {
    console.log('idutil '+idUtil+' idparc '+idParc); // OK !
    this.parcoursService.startParcours(idUtil, idParc).subscribe();
  }

}
