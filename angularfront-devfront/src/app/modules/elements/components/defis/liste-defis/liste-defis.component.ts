import { Component, OnInit } from '@angular/core';
import {DefisService} from '../../../../../services/defis.service';

@Component({
  selector: 'app-liste-defis',
  templateUrl: './liste-defis.component.html',
  styleUrls: ['./liste-defis.component.css']
})
export class ListeDefisComponent implements OnInit {
  public defis;
  private inactiveChecker;
  public idCat;

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
}
