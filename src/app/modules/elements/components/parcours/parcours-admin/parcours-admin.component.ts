import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  toUpParcours: ParcoursModel;
  private hasFailed;

  constructor(private parcService: ParcoursService) { }

  ngOnInit() {
  }

  ajouterParcours() {
    this.parc = new ParcoursModel();
    this.parc.nomParcours = this.nomParc;
    this.parc.descParcours = this.descParc;
    this.parc.prix = this.prix;
    this.parc.categorieId = this.idCat;
    this.parcService.createParcours(this.parc).subscribe(
      x => this.hasFailed = x
    );
  }

  getParcoursData(parcours: ParcoursModel) {
    this.toUpParcours = parcours;
  }

}
