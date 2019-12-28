import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CategorieService} from '../../../../../services/categorie.service';
import {CategorieModel} from '../../../../../models/categorie-model';

@Component({
  selector: 'app-modif-categories',
  templateUrl: './modif-categories.component.html',
  styleUrls: ['./modif-categories.component.css']
})
export class ModifCategoriesComponent implements OnInit {
  @Input() private cat: CategorieModel;
  @Input() private nomCat;
  @Input() private descCat;
  private hasFailed;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.change.subscribe(
      select => {this.cat = select;
                 this.nomCat = select.nomCategorie;
                 this.descCat = select.descCategorie;
      });
  }

  mettreAJourCategorie() {
    this.cat = new CategorieModel();
    this.cat.nomCategorie = this.nomCat;
    this.cat.descCategorie = this.descCat;
    this.categorieService.updateCategorie(this.categorieService.idCategorie, this.cat).subscribe(
      x => {
        this.hasFailed = x;
        if (!this.hasFailed) {
          this.categorieService.selection = null;
        }
      }
    );
  }
}
