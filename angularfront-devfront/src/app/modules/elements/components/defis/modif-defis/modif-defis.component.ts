import {AfterViewInit, Component, HostBinding, Input, OnChanges, OnInit} from '@angular/core';
import {DefiModel} from '../../../../../models/defi-model';
import {DefisService} from '../../../../../services/defis.service';
import {async} from "@angular/core/testing";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modif-defis',
  templateUrl: './modif-defis.component.html',
  styleUrls: ['./modif-defis.component.css']
})
export class ModifDefisComponent implements OnInit, OnChanges {
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        console.log(changes);
    }

  @Input() private def: DefiModel;
  @Input() private nomDef;
  @Input() private descDef;
  @Input() private infDef;
  @Input() private cateNum: number;
  private hasFailed;

  constructor(private defiService: DefisService) { }

  ngOnInit() {
  }

  mettreAJourDefi() {
    this.defiService.updateDefi(this.defiService.idDefi, this.def).subscribe(
      x => this.hasFailed = x
    );
  }


}
