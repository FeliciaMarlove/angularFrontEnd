import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DefiModel} from '../models/defi-model';
import {ParcoursModel} from "../models/parcours-model";

const URI = 'http://localhost:8080/api/parcours/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  public selection: ParcoursModel;
  public parcoursId: number;
  public defi: DefiModel;
  @Output() change: EventEmitter<ParcoursModel> = new EventEmitter();

  constructor(private http: HttpClient) { }
  listAllParcours() {
    return this.http.get(URI);
  }
  listParcoursUtilisateursLiaison() {
    return this.http.get('http://localhost:8080/api/utilparc');
  }
  startParcours(idUtil, idParcours) {
    return this.http.post('http://localhost:8080/api/utilparc/start/' + idUtil +'/'+idParcours, httpOptions);
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
    this.change.emit(this.selection);
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
    const parcDto = {};
    parcDto['id'] = parcours.parcoursId;
    parcDto['nomParcours'] = parcours.nomParcours;
    parcDto['descParcours'] = parcours.descParcours;
    parcDto['prix'] = parcours.prix;
    parcDto['categorieId'] = parcours.categorie.idCategorie;
    return this.http.post(URI + 'update/' + idParcours, JSON.stringify(parcDto), httpOptions);
  }
}
