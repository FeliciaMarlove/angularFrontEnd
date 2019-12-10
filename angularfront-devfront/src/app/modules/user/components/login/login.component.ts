import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {LoginModel} from "../../../../models/login-model";
import {Router} from "@angular/router";

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginAttempt() {
    this.loginModel = new LoginModel(this.email, this.password);
    this.userService.login(this.loginModel).subscribe( x => {
      this.checkLogins = x;
      console.log('statut login : '+this.checkLogins);
      if (this.checkLogins) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.msg = 'Wrong credentials';
      }
    });
  }

}
