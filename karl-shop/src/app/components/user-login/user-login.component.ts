import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  AuthService,
  FacebookLoginProvider,
  // GoogleLoginProvider,
  SocialUser
} from 'angular5-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from '../../entity/user-data';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  _userData: any;
  _storeData: UserData[] = [];
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  sub: any;
  id: string;
  constructor(private socialAuthService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        this._userData = userData;
        this._storeData.push(this._userData);

        console.log(this._storeData);

        this.sub = this.route.params.subscribe(params => {
          this.id = params['id'];
          this.router.navigate(['/account/',userData.id]);
        });
        
      }
    )
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
