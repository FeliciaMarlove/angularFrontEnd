import { Component, OnInit } from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';
import {CategorieService} from '../../../../../services/categorie.service';
import {CompleterData, CompleterService} from 'ng2-completer';

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
  private idCategorie: number;
  private nomCategorie: string;
  toUpDefi: DefiModel;
  private hasFailed;
  private categories;
  private dataService: CompleterData;

  constructor(private defiService: DefisService, private categorieService: CategorieService, private completerService: CompleterService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  ajouterDefi() {
    this.def = new DefiModel();
    this.def.nomDefi = this.nomDef;
    this.def.descDefi = this.descDef;
    this.def.infobulleDefi = this.infoDef;
    this.def.nomCategorie = this.nomCategorie;
    this.def.categorieId = this.idCategorie;
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
        console.log('/defis admin ts/ categories ');
        console.log(this.categories);
        this.dataService = this.completerService.local(this.categories, 'nomCategorie', 'nomCategorie');
      }
    );
  }
}
