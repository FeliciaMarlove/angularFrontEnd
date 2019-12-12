import { Component, OnInit } from '@angular/core';
import {ParcoursService} from "../../../../../services/parcours.service";
import {DefiModel} from "../../../../../models/defi-model";

@Component({
  selector: 'app-parcdefis',
  templateUrl: './parcdefis.component.html',
  styleUrls: ['./parcdefis.component.css']
})
export class ParcdefisComponent implements OnInit {
  private defis: DefiModel;

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit() {
  }
  
  seeAllDefis() {
    this.parcoursService.getOneParcours(this.parcoursService.parcoursId).subscribe(
      x => {
        console.log(this.parcoursService.parcoursId);
        this.defis = x;
      }
    )
  }

}
