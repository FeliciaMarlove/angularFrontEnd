import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {UserModel} from '../../../../models/user-model';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private userModel: UserModel;
  createForm: FormGroup;
  private createFailed = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      datenaiss: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pw: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  inscrireUtilisateur() {
    console.log(this.createForm.valid);
    if (this.createForm.valid) {
      this.userModel = new UserModel();
      this.userModel.setUser(this.createForm.value);
      this.userService.create(this.userModel).subscribe(
            x => {
              this.createFailed = x;
              console.log(this.createFailed);
              if (this.createFailed === false) {
                this.router.navigateByUrl('login');
              }
            }
        );
    }
  }

}
