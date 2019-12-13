import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {FormControl} from '@angular/forms';
import {UserModel} from '../../../../models/user-model';

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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
        console.log('INIT');
        this.connectedUser = x;
        this.userId = x.idUtilisateur;
        this.motDePasse = x.motDePasse;
        this.email = x.email;
        console.log('id ' + this.userId + ' mdp ' + this.motDePasse + ' mail ' + this.email);
        // fonctionne on init
      }
    );
  }

  mettreAJourUser(m, p) {
    this.userService.getUserFromMail(JSON.parse(localStorage.getItem('user')).login).subscribe( x => {
        console.log('MAJ');
        this.connectedUser = x; // userentity
        console.log(this.connectedUser); // OK
        this.userId = x.idUtilisateur;
        this.connectedUser.motDePasse = p;
        this.connectedUser.email = m;
        console.log('id ' + this.userId + ' mdp ' + this.connectedUser.motDePasse + ' mail ' + this.connectedUser.email);
        // MDP ET MAIL NULLs
        this.userService.updateUser(this.connectedUser, this.userId).subscribe();
      }
    );
  }


}
