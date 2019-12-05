import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../../../services/categorie.service';
import {CategorieModel} from '../../../../../models/categorie-model';

@Component({
  selector: 'app-modif-categories',
  templateUrl: './modif-categories.component.html',
  styleUrls: ['./modif-categories.component.css']
})
export class ModifCategoriesComponent implements OnInit {
  private cat: CategorieModel;
  private nomCat;
  private descCat;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

  mettreAJourCategorie() {
    this.cat = new CategorieModel();
    this.cat.nomCategorie = this.nomCat;
    this.cat.descCategorie = this.descCat;
    this.categorieService.updateCategorie(this.categorieService.idCategorie, this.cat).subscribe();
    this.categorieService.selection = null;
  }
}
