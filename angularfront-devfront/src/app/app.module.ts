import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {BonjourComponent} from './components/bonjour/bonjour.component';
import {LoginComponent} from './modules/user/components/login/login.component';
import {CreateComponent} from './modules/user/components/create/create.component';
import {UpdateComponent} from './modules/user/components/update/update.component';
import {ListeParcoursComponent} from './modules/elements/components/parcours/liste-parcours/liste-parcours.component';
import {ParcoursAdminComponent} from './modules/elements/components/parcours/parcours-admin/parcours-admin.component';
import {ModifParcoursComponent} from './modules/elements/components/parcours/modif-parcours/modif-parcours.component';
import {DefiDuJourComponent} from './modules/elements/components/defis/defi-du-jour/defi-du-jour.component';
import {ListeDefisComponent} from './modules/elements/components/defis/liste-defis/liste-defis.component';
import {DefisAdminComponent} from './modules/elements/components/defis/defis-admin/defis-admin.component';
import {ModifDefisComponent} from './modules/elements/components/defis/modif-defis/modif-defis.component';
import {ListeCategoriesComponent} from './modules/elements/components/categories/liste-categories/liste-categories.component';
import {CategoriesAdminComponent} from './modules/elements/components/categories/categories-admin/categories-admin.component';
import {ModifCategoriesComponent} from './modules/elements/components/categories/modif-categories/modif-categories.component';
import {DashboardComponent} from './modules/dashboard/components/dashboard/dashboard.component';
import {MenuComponent} from './modules/menu/components/menu/menu.component';
import {MenuUserComponent} from './modules/menu/components/menu-user/menu-user.component';
import {MenuAdminComponent} from './modules/menu/components/menu-admin/menu-admin.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ParcoursComponent} from './modules/elements/components/parcours/parcours/parcours.component';
import { ParcdefisComponent } from './modules/elements/components/parcours-defis/parcdefis/parcdefis.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import { ListeComponent } from './Utilitaires/liste/liste.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    LoginComponent,
    CreateComponent,
    UpdateComponent,
    ListeParcoursComponent,
    ParcoursAdminComponent,
    ModifParcoursComponent,
    DefiDuJourComponent,
    ListeDefisComponent,
    DefisAdminComponent,
    ModifDefisComponent,
    ListeCategoriesComponent,
    CategoriesAdminComponent,
    ModifCategoriesComponent,
    DashboardComponent,
    MenuComponent,
    MenuUserComponent,
    MenuAdminComponent,
    ParcoursComponent,
    ParcdefisComponent,
    ListeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
