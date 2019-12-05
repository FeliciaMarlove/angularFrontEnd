import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../../../services/categorie.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  public categories;
  private inactiveChecker;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.getCategoriesActives();
  }

  getCategoriesActives() {
    this.inactiveChecker = false;
    this.categories = [];
    this.categorieService.listActiveCategories().subscribe(
      (data: {}) => {
        this.categories = data;
      }
    );
  }

  getAllCategories() {
    this.inactiveChecker = true;
    this.categories = [];
    this.categorieService.listAllCategories().subscribe(
      (data: {}) => {
        // console.log(data);
        this.categories = data;
      }
    );
  }
}
