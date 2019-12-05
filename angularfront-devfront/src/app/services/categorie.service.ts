import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  constructor(private http: HttpClient) { }
  listActiveCategories() {
    return this.http.get(URI);
  }
  listAllCategories() {
    return this.http.get(URI + 'all');
  }

  // en get :
  setActiveCategorie(categorieId) {
    console.log(URI + 'activer/' + categorieId);
    return this.http.get(URI + 'activer/' + categorieId).subscribe();
  }

  // en post :
  setInactiveCategorie(categorieId) {
    console.log(URI + 'desactiver/' + categorieId);
    return this.http.post(URI + 'desactiver/' + categorieId, httpOptions).subscribe();
  }

  select(categorie) {
    this.selection = categorie;
    this.idCategorie = categorie.idCategorie;
    console.log(this.selection);
    console.log(this.idCategorie);
  }

  createCategorie(categorie) {
    return this.http.post(URI + 'creer', JSON.stringify(categorie), httpOptions);
  }

  updateCategorie(idCategorie, categorie) {
    console.log(JSON.stringify(categorie));
    return this.http.post(URI + '/update/' + idCategorie, JSON.stringify(categorie), httpOptions);
  }
}
