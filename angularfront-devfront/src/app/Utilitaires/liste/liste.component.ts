import { Component, OnInit } from '@angular/core';
import {GeneriqueService} from '../../services/generique.service';
import {Router} from '@angular/router';
import {ParcoursModel} from '../../models/parcours-model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  local: string;
  columns: string[] = [];
  content: Object;
  row: any[] = [];
  constructor(private generiqueService: GeneriqueService, private router: Router) { }

  ngOnInit() {
    console.log(this.local = '/parcours'); // test purpose
    this.getListG();
  }

  getListG() {
    this.generiqueService.getList(this.local).subscribe(
      data => {
        /* do something */
        let x;
        // tslint:disable-next-line:forin
        for (x in data[0]) {
          this.columns.push(x);
        }
        console.log('COLUMNS ' + this.columns); // OK
        this.content = data;
        console.log(this.content);
        let y;
        for (y in this.content) {
          this.row.push(y);
          console.log(y); // l'indice de la ligne (key ?)
        }
        for (let i = 0; i < this.row.length; i++) {
          console.log(this.content[i]); // content[i] = un objet
        }
      }
    );
  }

}
