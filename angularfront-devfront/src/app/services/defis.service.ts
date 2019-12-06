import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DefiModel} from "../models/defi-model";

const URI = 'http://localhost:8080/api/defis/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DefisService {
  public selection: DefiModel;
  public idDefi;
  public idCat;
  @Output() change: EventEmitter<DefiModel> = new EventEmitter();

  constructor(private http: HttpClient) { }
  listActiveDefis() {
    return this.http.get(URI);
  }
  listeAllDefis() {
    return this.http.get(URI + 'all');
  }

  setActiveDefi(defiId) {
    return this.http.post(URI + 'activer/' + defiId,
      httpOptions).subscribe();
  }

  setInactiveDefi(defiId) {
    return this.http.post(URI + 'desactiver/' + defiId,
      httpOptions).subscribe();
  }

  getIdCategorie(idDefi) {
    return this.http.get(URI + 'getcat/' + idDefi);
    //RETOURNE UN OBSERVABLE BC -> HTTP !
  }

  select(defi) {
    this.selection = defi;
    this.idDefi = defi.idDefi;
    this.change.emit(this.selection);
  }

  createDefi(defi) {
    return this.http.post(URI + 'creer', JSON.stringify(defi), httpOptions);
  }

  updateDefi(idDefi, defi) {
    return this.http.post(URI + 'update/' + idDefi, JSON.stringify(defi), httpOptions);
  }
}
