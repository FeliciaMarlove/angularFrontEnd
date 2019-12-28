import { Component, OnInit } from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';
import {CategorieModel} from '../../../../../models/categorie-model';
import {CategorieService} from '../../../../../services/categorie.service';

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
  private categories;

  constructor(private defiService: DefisService, private categorieService: CategorieService) { }

  ngOnInit() {
    this.getCategories();
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
        console.log('/defi-admin/ Has failed ? ' + this.hasFailed);
      }
    );
  }

  getDefidata(defi: DefiModel) {
    console.log('/defi-admin/ Defi : ' + defi);
    this.toUpDefi = defi;
  }

  getCategories() {
    this.categorieService.listActiveCategories().subscribe(
      x => {
        this.categories = x;
        console.log(this.categories);
      }
    );
  }
}
