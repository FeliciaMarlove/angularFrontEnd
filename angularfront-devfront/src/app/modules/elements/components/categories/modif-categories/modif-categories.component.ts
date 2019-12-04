import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../../../../services/categorie.service";
import {CategorieModel} from "../../../../../models/categorie-model";

@Component({
  selector: 'app-modif-categories',
  templateUrl: './modif-categories.component.html',
  styleUrls: ['./modif-categories.component.css']
})
export class ModifCategoriesComponent implements OnInit {

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

}
