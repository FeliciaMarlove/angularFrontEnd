import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../../../services/parcours.service';

@Component({
  selector: 'app-liste-parcours',
  templateUrl: './liste-parcours.component.html',
  styleUrls: ['./liste-parcours.component.css']
})
export class ListeParcoursComponent implements OnInit {
  public parcourss;

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit() {
    this.getAllParcours();
  }
  getAllParcours() {
    this.parcourss = [];
    this.parcoursService.listAllParcours().subscribe(
      (data: {}) => {
        this.parcourss = data;
      }
    );
  }

}
