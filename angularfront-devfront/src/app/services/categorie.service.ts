import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const URI = 'http://localhost:8080/api/categories/'; //<endpoint
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
  listActiveCategories() {
    return this.http.get(URI);
  }
  listAllCategories() {
    return this.http.get(URI + 'all');
  }

  // ???????? post
  setActiveCategorie(categorie) {
    return this.http.post(URI + 'activer/' + categorie.idCategorie, JSON.stringify(categorie), httpOptions);
  }
}
