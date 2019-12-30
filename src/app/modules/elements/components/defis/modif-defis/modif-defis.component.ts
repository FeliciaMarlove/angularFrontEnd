import {AfterViewInit, Component, HostBinding, Input, OnChanges, OnInit} from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';
import {CompleterData, CompleterService} from 'ng2-completer';
import {CategorieService} from '../../../../../services/categorie.service';

@Component({
  selector: 'app-modif-defis',
  templateUrl: './modif-defis.component.html',
  styleUrls: ['./modif-defis.component.css']
})
export class ModifDefisComponent implements OnInit, OnChanges {
  constructor(private defiService: DefisService, private completerService: CompleterService, private categorieService: CategorieService) { }

  private hasFailed;
  @Input() private def: DefiModel;
  @Input() private nomDef;
  @Input() private descDef;
  @Input() private infDef;
  @Input() private idCategorie: number;
  private nomCategorie: string;
  private categories;
  private dataService: CompleterData;
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        console.log(changes);
    }

  ngOnInit() {
    this.getCategories();
  }

  mettreAJourDefi() {
    this.defiService.updateDefi(this.defiService.idDefi, this.def).subscribe(
      x => this.hasFailed = x
    );
  }

  getCategories() {
    this.categorieService.listActiveCategories().subscribe(
      x => {
        this.categories = x;
        console.log('/defis admin ts/ categories ');
        console.log(this.categories);
        this.dataService = this.completerService.local(this.categories, 'nomCategorie', 'nomCategorie');
      }
    );
  }

}
