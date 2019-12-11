export class UserModel {
  nomUtilisateur: string;
  prenomUtilisateur: string;
  dateNaiss: string;
  email: string;
  motDePasse: string;
  newsletterOptIn: boolean;
  roleId: number;
  idUtilisateur: number;
  paysId: number;
  isBusy: boolean;


  setUser(nomUtilisateur: string, prenomUtilisateur: string, dateNaiss: string, email: string, motDePasse: string, newsletterOptIn: boolean) {
    this.nomUtilisateur = nomUtilisateur;
    this.prenomUtilisateur = prenomUtilisateur;
    this.dateNaiss = dateNaiss;
    this.email = email;
    this.motDePasse = motDePasse;
    this.newsletterOptIn = newsletterOptIn;
  }
}
