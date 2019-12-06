import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';

@Component({
  selector: 'app-modif-defis',
  templateUrl: './modif-defis.component.html',
  styleUrls: ['./modif-defis.component.css']
})
export class ModifDefisComponent implements OnInit {
  @Input() private def: DefiModel;
  @Input() private nomDef;
  @Input() private descDef;
  @Input() private infDef;
  @Input() private catNum;

  constructor(private defiService: DefisService) { }

  ngOnInit() {
    this.defiService.change.subscribe(select => {this.def = select; this.nomDef = select.nomDefi; this.descDef = select.descDefi; this.infDef = select.infobulleDefi;});
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
