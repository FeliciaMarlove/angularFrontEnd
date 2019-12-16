import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {LoginModel} from '../../../../models/login-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }

  @Input() private email: string;
  @Input() private password: string;
  @Input() private loginModel: LoginModel;
  @Input() private checkLogins;
  private msg;
  private userModel;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginAttempt() {
    this.loginModel = new LoginModel(this.email, this.password);
    this.userService.login(this.loginModel).subscribe( x => {
      this.checkLogins = x;
      console.log('statut login : ' + this.checkLogins);
      if (this.checkLogins) {
        // tslint:disable-next-line:max-line-length
        localStorage.setItem('user', JSON.stringify({login: this.loginModel.email})); // stocke l'email de l'utilisateur connecté dans "localStorage"
        // console.log(localStorage);
        // console.log(JSON.parse(localStorage.getItem('user')).login);

        /*RECUP DE L'UTILISATEUR DEPUIS L'EMAIL -- DEBUT*/
        this.email = JSON.parse(localStorage.getItem('user')).login;
        // console.log(this.email);

        this.userService.getUserFromMail(this.email).subscribe( x => {
          this.userModel = x;
          // console.log(this.userModel);
        });

        // console.log('usermodel '+this.userModel); // MAIS PAS LA

        /*RECUP DE L'UTILISATEUR DEPUIS L'EMAIL -- FIN*/

        this.router.navigateByUrl('dashboard');
      } else {
        this.msg = 'Identifiant/mot de passe incorrect.';
      }
    });
  }
}
