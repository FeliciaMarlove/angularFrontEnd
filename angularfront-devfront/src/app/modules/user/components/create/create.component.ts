import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {UserModel} from "../../../../models/user-model";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private nomU;
  private prenomU;
  private datenaissU;
  private emailU;
  private pwU;
  private newsletterU;
  private userModel: UserModel;
  createForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      datenaiss: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email]),
      pw: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  inscrireUtilisateur() {

    if (this.createForm.valid) {
      this.userModel = new UserModel();
      this.userModel.setUser(this.createForm.value);
      this.userService.create(this.userModel).subscribe();
      this.router.navigateByUrl('login');
    }
    // check fail !
  }

}
