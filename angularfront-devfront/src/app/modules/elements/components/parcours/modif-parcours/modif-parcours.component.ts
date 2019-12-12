import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ParcoursModel} from '../../../../../models/parcours-model';
import {ParcoursService} from '../../../../../services/parcours.service';

@Component({
  selector: 'app-modif-parcours',
  templateUrl: './modif-parcours.component.html',
  styleUrls: ['./modif-parcours.component.css']
})
export class ModifParcoursComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }

  @Input() private parc: ParcoursModel;
  @Input() private nomParc;
  @Input() private descParc;
  @Input() private prixParc: number;
  @Input() private idCatParc: number;
  private hasFailed;

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit() {
  }
  mettreAJourParcours() {
    this.parcoursService.updateParcours(this.parc, this.parcoursService.parcoursId).subscribe(
      x => this.hasFailed = x
    );
  }
}
