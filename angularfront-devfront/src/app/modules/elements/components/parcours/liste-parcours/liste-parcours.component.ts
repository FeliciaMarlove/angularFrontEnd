import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParcoursService} from '../../../../../services/parcours.service';
import {ParcoursModel} from '../../../../../models/parcours-model';


@Component({
  selector: 'app-liste-parcours',
  templateUrl: './liste-parcours.component.html',
  styleUrls: ['./liste-parcours.component.css']
})
export class ListeParcoursComponent implements OnInit {
  @Input() private parc: ParcoursModel;
  public parcourss;
  @Output() selectParcours: EventEmitter<ParcoursModel> = new EventEmitter<ParcoursModel>();
  private inactiveChecker;

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit() {
    this.getActiveParcours();
  }
  getActiveParcours() {
    this.inactiveChecker = false;
    this.parcourss = [];
    this.parcoursService.listActiveParcours().subscribe(
      data => this.parcourss = data
    );
  }

  /*not used*/
  getAllParcours() {
    this.inactiveChecker = true;
    this.parcourss = [];
    this.parcoursService.listAllParcours().subscribe(
      (data: {}) => {
        this.parcourss = data;
      }
    );
  }

  select(parcoursMod: ParcoursModel) {
    this.selectParcours.emit(parcoursMod);
  }
}
