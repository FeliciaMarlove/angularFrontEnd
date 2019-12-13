import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../../../services/parcours.service';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';

@Component({
  selector: 'app-parcdefis',
  templateUrl: './parcdefis.component.html',
  styleUrls: ['./parcdefis.component.css']
})
export class ParcdefisComponent implements OnInit {
  private defis: DefiModel[];
  private defi: DefiModel;
  private newDefi: DefiModel;
  private success = true;

  constructor(private parcoursService: ParcoursService, private defiService: DefisService) { }

  ngOnInit() {
  }

  seeDefisInParcours() {
    this.parcoursService.getOneParcours(this.parcoursService.parcoursId).subscribe(
      x => {
        console.log(this.parcoursService.parcoursId);
        this.defis = x;
      }
    );
  }

  selectDefi(defi: DefiModel) {
    console.log(defi);
    this.defi = defi;
  }

  removeDefiFromParcours(defi) {
    this.parcoursService.supprimerDefiDeParcours(this.parcoursService.parcoursId, defi.idDefi).subscribe(
      x => {
        console.log(this.parcoursService.parcoursId + ' ' + defi.idDefi);
      }
    );
  }

  addDefiIntoParcours(newDefi) {
    this.parcoursService.ajouterDefiDansParcours(newDefi.idDefi, this.parcoursService.parcoursId).subscribe(
      x => {
        console.log(newDefi.idDefi + ' ' + this.parcoursService.parcoursId);
        this.success = x;
        console.log(this.success);
      }
    );
  }
}
