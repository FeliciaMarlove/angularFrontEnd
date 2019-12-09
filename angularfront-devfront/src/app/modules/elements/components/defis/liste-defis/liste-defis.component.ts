import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DefisService} from '../../../../../services/defis.service';
import {CategorieService} from "../../../../../services/categorie.service";
import {DefiModel} from "../../../../../models/defi-model";

@Component({
  selector: 'app-liste-defis',
  templateUrl: './liste-defis.component.html',
  styleUrls: ['./liste-defis.component.css']
})
export class ListeDefisComponent implements OnInit {
  @Output() selectDefi: EventEmitter<DefiModel> = new EventEmitter<DefiModel>();
  public defis;
  private inactiveChecker;

  constructor(private defiService: DefisService) { }

  ngOnInit() {
    this.getDefiActifs();
  }

  getDefiActifs() {
    this.inactiveChecker = false;
    this.defis = [];
    this.defiService.listActiveDefis().subscribe(
      (data: {}) => {
        this.defis = data;
    }
    );
  }

  getAllDefis() {
    this.inactiveChecker = true;
    this.defis = [];
    this.defiService.listeAllDefis().subscribe(
      (data: {}) => {
        this.defis = data;
      }
    );
  }

  select(defi: DefiModel) {
    this.selectDefi.emit(defi);
  }
}
