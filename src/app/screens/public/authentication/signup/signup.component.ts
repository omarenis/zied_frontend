import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacebookLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
interface SignupFormGroup {
  first_name: FormControl;
  last_name: FormControl;
  email: FormControl;
  password: FormControl;
  repeatedPassword: FormControl;
  username: FormControl;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  formGroup !: FormGroup;
  constructor(private socialAuthService: SocialAuthService) {
  }

  signupWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
      console.log(user);
    });
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup<SignupFormGroup>({
      email: new FormControl('', [Validators.required, Validators.email]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    });

  }
}
