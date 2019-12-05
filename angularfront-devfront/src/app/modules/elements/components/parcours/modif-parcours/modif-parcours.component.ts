import { Component, OnInit } from '@angular/core';
import {ParcoursModel} from '../../../../../models/parcours-model';
import {ParcoursService} from '../../../../../services/parcours.service';

@Component({
  selector: 'app-modif-parcours',
  templateUrl: './modif-parcours.component.html',
  styleUrls: ['./modif-parcours.component.css']
})
export class ModifParcoursComponent implements OnInit {
  private parc: ParcoursModel;
  private nomParc;
  private descParc;
  private prixParc: number;
  private idCatParc: number;

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit() {
  }
  mettreAJourParcours() {
    this.parc = new ParcoursModel();
    this.parc.nomParcours = this.nomParc;
    this.parc.descParcours = this.descParc;
    this.parc.prix = this.prixParc;
    this.parc.categorie = this.idCatParc;
    this.parcoursService.updateParcours(this.parc, this.parcoursService.parcoursId).subscribe();
    this.parcoursService.selection = null;
  }

}
