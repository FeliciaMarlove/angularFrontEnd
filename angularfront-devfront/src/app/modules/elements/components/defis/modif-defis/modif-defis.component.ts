import { Component, OnInit } from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modif-defis',
  templateUrl: './modif-defis.component.html',
  styleUrls: ['./modif-defis.component.css']
})
export class ModifDefisComponent implements OnInit {
  private def: DefiModel;
  private nomDef;
  private descDef;
  private infDef;
  private catNum;

  constructor(private defiService: DefisService) { }

  ngOnInit() {
  }

  mettreAJourDefi() {
    this.def = new DefiModel();
    this.def.nomDefi = this.nomDef;
    this.def.descDefi = this.descDef;
    this.def.infobulleDefi = this.infDef;
    this.def.categorieId = this.catNum;
    this.defiService.updateDefi(this.defiService.idDefi, this.def).subscribe();
    this.defiService.selection = null;
  }
}
