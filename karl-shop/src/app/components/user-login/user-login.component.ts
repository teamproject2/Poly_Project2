import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  AuthService,
  FacebookLoginProvider,
  // GoogleLoginProvider,
  SocialUser
} from 'angular5-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from '../../entity/user-data';
import { ToastrService } from '../../services/toastr.service';
import { EventEmitter } from 'events';
import { Http } from '@angular/http';

declare let toastr
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
  platForm: string;

  constructor(private socialAuthService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private http: Http
  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    return this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
            console.log(socialPlatform + " sign in data : ", userData);

            // Now sign-in with userData -->
            this._userData = userData;
            this._storeData.push(this._userData);
            // Now sign-in with userData <--

            // Alert when user login -->
            this.toastrService.success(`${userData.name}, Nice to meet you !`);
            // Alert when user login <--

            this.router.navigate(['/home/account/',userData.id]);
        },
        error => this.toastrService.error(`${error}`)
    )
}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
