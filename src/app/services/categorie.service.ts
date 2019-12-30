import {EventEmitter, HostListener, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CategorieModel} from "../models/categorie-model";

const URI = 'http://localhost:8080/api/categories/'; // <endpoint
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  public selection;
  public idCategorie;
  @Output() change: EventEmitter<CategorieModel> = new EventEmitter();

  constructor(private http: HttpClient) { }
  listActiveCategories(): any {
    return this.http.get(URI);
  }
  listAllCategories() {
    return this.http.get(URI + 'all');
  }

  // en get :
  setActiveCategorie(categorieId) {
    return this.http.get(URI + 'activer/' + categorieId).subscribe();
  }

  createCategorie(categorie) {
    return this.http.post(URI + 'creer', JSON.stringify(categorie), httpOptions);
  }

  updateCategorie(idCategorie, categorie): any {
    return this.http.post(URI + 'update/' + idCategorie, JSON.stringify(categorie), httpOptions);
  }

  // en post :
  setInactiveCategorie(categorieId) {
    return this.http.post(URI + 'desactiver/' + categorieId, httpOptions).subscribe();
  }

  select(categorie) {
    this.selection = categorie;
    this.idCategorie = categorie.idCategorie;
    this.change.emit(this.selection);
  }
}
