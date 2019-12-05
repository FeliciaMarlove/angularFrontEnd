import { Component, OnInit } from '@angular/core';
import {ParcoursModel} from '../../../../../models/parcours-model';
import {ParcoursService} from '../../../../../services/parcours.service';

@Component({
  selector: 'app-parcours-admin',
  templateUrl: './parcours-admin.component.html',
  styleUrls: ['./parcours-admin.component.css']
})
export class ParcoursAdminComponent implements OnInit {
  private parc: ParcoursModel;
  private nomParc;
  private descParc;
  private prix: number;
  private idCat: number;

  constructor(private parcService: ParcoursService) { }

  ngOnInit() {
  }

  ajouterParcours() {
    this.parc = new ParcoursModel();
    this.parc.nomParcours = this.nomParc;
    this.parc.descParcours = this.descParc;
    this.parc.prix = this.prix;
    this.parc.categorie = this.idCat;
    this.parcService.createParcours(this.parc).subscribe();
  }

}
