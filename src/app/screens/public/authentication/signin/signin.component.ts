import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginSignupService} from "../../../../services/login-signup.service";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
 formGroup !: FormGroup;
  error !: string;
  constructor(private router: Router, private loginSingupService: LoginSignupService,
              private authService: SocialAuthService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  navigateTo(event: Event) {
    event.preventDefault();
    this.router.navigate(['/public/auth/singup']).then((response) => {
      console.log(response);
    });
  }
  submit(event: Event){
    event.preventDefault();
     console.log(this.formGroup.value);
  }

  SignInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response: SocialUser) => {
      console.log(response);
    })
  }
}
