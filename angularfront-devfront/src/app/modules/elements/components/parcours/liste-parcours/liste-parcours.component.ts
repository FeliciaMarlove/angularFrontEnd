import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParcoursService} from '../../../../../services/parcours.service';
import {ParcoursModel} from "../../../../../models/parcours-model";

@Component({
  selector: 'app-liste-parcours',
  templateUrl: './liste-parcours.component.html',
  styleUrls: ['./liste-parcours.component.css']
})
export class ListeParcoursComponent implements OnInit {
  @Input() private parc: ParcoursModel;
  public parcourss;
  @Output() selectParcours: EventEmitter<ParcoursModel> = new EventEmitter<ParcoursModel>();

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit() {
    this.getAllParcours();
  }
  getAllParcours() {
    this.parcourss = [];
    this.parcoursService.listAllParcours().subscribe(
      (data: {}) => {
        this.parcourss = data;
        console.log(data[0].isActiveParcours);
      }
    );
  }

  select(parcoursMod: ParcoursModel) {
    this.selectParcours.emit(parcoursMod);
  }
}
