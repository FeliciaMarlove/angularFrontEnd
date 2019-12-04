import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './modules/dashboard/components/dashboard/dashboard.component';
import {CategoriesAdminComponent} from './modules/elements/components/categories/categories-admin/categories-admin.component';
import {DefisAdminComponent} from './modules/elements/components/defis/defis-admin/defis-admin.component';
import {ParcoursAdminComponent} from './modules/elements/components/parcours/parcours-admin/parcours-admin.component';
import {CreateComponent} from './modules/user/components/create/create.component';
import {LoginComponent} from './modules/user/components/login/login.component';
import {DefiDuJourComponent} from './modules/elements/components/defis/defi-du-jour/defi-du-jour.component';
import {ParcoursComponent} from './modules/elements/components/parcours/parcours/parcours.component';
import {ParcdefisComponent} from './modules/elements/components/parcours-defis/parcdefis/parcdefis.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent},
  { path: '', component: DashboardComponent}, //EN ATTENDANT
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'defidujour', component: DefiDuJourComponent},
      { path: 'parcours', component: ParcoursComponent},
      { path: 'parcoursadmin', component: ParcoursAdminComponent},
      { path: 'defisadmin', component: DefisAdminComponent},
      { path: 'categoriesadmin', component: CategoriesAdminComponent},
      { path: 'parcdefis', component: ParcdefisComponent},
      { path: '', component: DefiDuJourComponent},
    ]},
  { path: 'create', component: CreateComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
