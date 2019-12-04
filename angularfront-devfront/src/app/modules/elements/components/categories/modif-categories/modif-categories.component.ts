import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../../../../services/categorie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modif-categories',
  templateUrl: './modif-categories.component.html',
  styleUrls: ['./modif-categories.component.css']
})
export class ModifCategoriesComponent implements OnInit {

  constructor(private categorieService: CategorieService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }



}
