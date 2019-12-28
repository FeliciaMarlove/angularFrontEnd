import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../../../services/categorie.service';
import {CategorieModel} from '../../../../../models/categorie-model';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.css']
})
export class CategoriesAdminComponent implements OnInit {
  private cat: CategorieModel;
  private nomCat;
  private descCat;
  private hasFailed;

  constructor(private categoriesService: CategorieService) { }

  ngOnInit() {
  }

  ajouterCategorie() {
    this.cat = new CategorieModel();
    this.cat.nomCategorie = this.nomCat;
    this.cat.descCategorie = this.descCat;
    this.categoriesService.createCategorie(this.cat).subscribe(
      x => {
        this.hasFailed = x;
        console.log('/categories admin/ Has failed ? ' + this.hasFailed);
      }
    );
  }
}
