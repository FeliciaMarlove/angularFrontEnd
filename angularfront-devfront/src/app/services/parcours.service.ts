import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DefiModel} from '../models/defi-model';

const URI = 'http://localhost:8080/api/parcours/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  public selection;
  public parcoursId: number;
  public defi: DefiModel;

  constructor(private http: HttpClient) { }
  listAllParcours() {
    return this.http.get(URI);
  }
  getOneParcours(parcoursId) {
    return this.http.get(URI + parcoursId);
  }
  setActiveParcours(parcoursId) {
    return this.http.post(URI + 'activer/' + parcoursId, httpOptions).subscribe();
  }
  setInactiveParcours(parcoursId) {
    return this.http.post(URI + 'desactiver/' + parcoursId, httpOptions).subscribe();
  }
  select(parcours) {
    this.selection = parcours;
    this.parcoursId = parcours.idParcours;
  }
  createParcours(parcours) {
    return this.http.post(URI + 'creer', JSON.stringify(parcours), httpOptions);
  }
  ajouterDefiDansParcours(defi, idParcours) {
    return this.http.post(URI + 'ajouterDefi/' + idParcours, JSON.stringify(defi), httpOptions);
  }

  supprimerDefiDeParcours(idParcours, idDefi) {
    return this.http.post(URI + 'supprimerdefi/' + idParcours + '/' + idDefi, httpOptions);
  }

  updateParcours(parcours, idParcours) {
    console.log(URI + 'update/' + idParcours);
    return this.http.post(URI + 'update/' + idParcours, JSON.stringify(parcours), httpOptions);
  }
}
