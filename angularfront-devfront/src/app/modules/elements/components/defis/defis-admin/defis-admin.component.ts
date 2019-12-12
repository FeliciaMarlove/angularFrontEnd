import { Component, OnInit } from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';

@Component({
  selector: 'app-defis-admin',
  templateUrl: './defis-admin.component.html',
  styleUrls: ['./defis-admin.component.css']
})
export class DefisAdminComponent implements OnInit {
  private def: DefiModel;
  private nomDef;
  private descDef;
  private infoDef;
  private idCat;
  toUpDefi: DefiModel;
  private hasFailed;

  constructor(private defiService: DefisService) { }

  ngOnInit() {
  }

  ajouterDefi() {
    this.def = new DefiModel();
    this.def.nomDefi = this.nomDef;
    this.def.descDefi = this.descDef;
    this.def.infobulleDefi = this.infoDef;
    this.def.categorieId = this.idCat;
    this.defiService.createDefi(this.def).subscribe(
      x => {
        this.hasFailed = x;
        console.log(this.hasFailed)
      }
    );
  }

  getDefidata(defi: DefiModel) {
    console.log(defi);
    this.toUpDefi = defi;
  }
}
