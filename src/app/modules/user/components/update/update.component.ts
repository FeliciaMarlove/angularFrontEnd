import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {UserModel} from '../../../../models/user-model';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private connectedUser: UserModel;
  private userId: number;

  @Input() private email;
  @Input() private motDePasse;
  private warning = '';
  // tslint:disable-next-line:max-line-length
  private oldSchool: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
        console.log('/update/ INIT infos de l\'utilisateur');
        this.connectedUser = x;
        this.userId = x.idUtilisateur;
        this.motDePasse = x.motDePasse;
        this.email = x.email;
        console.log('id ' + this.userId + ' mdp ' + this.motDePasse + ' mail ' + this.email);
      }
    );
  }
  mettreAJourUser(m, p) {
    if (this.oldSchool.test(m)) {
      if (p.length >= 4) {
        console.log('/update/ Email vs RegEx ? ' + this.oldSchool.test(m));
        this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
            console.log('/update/ MAJ de l\'utilisateur');
            this.connectedUser = x; // userentity
            console.log('/update/ Utilisateur connecté ' + this.connectedUser);
            this.userId = x.idUtilisateur;
            this.connectedUser.motDePasse = p;
            this.connectedUser.email = m;
            console.log('/update/ id ' + this.userId + ' mdp ' + this.connectedUser.motDePasse + ' mail ' + this.connectedUser.email);
            this.userService.updateUser(this.connectedUser, this.userId).subscribe();
            this.warning = 'Modification effectuée';
          }
        );
      } else {
        this.warning = 'Veuillez entrer un mot de passe d\' au moins 4 caractères';
        }
     } else {
      this.warning = 'Veuillez entrer une adresse e-mail valide';
    }
  }
}
