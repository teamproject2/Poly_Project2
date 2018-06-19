import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../services/toastr.service';
import { AuthService } from '../../services/auth.service';
import { UserData } from '../../entity/user-data';

declare let toastr: any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers:[AuthService]
})
export class UserLoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  _userData: any;
  _storeUser: UserData[] = [];

  constructor(private router: Router, private toastrService: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {

  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  signInWithFB() {
    this.authService.doFacebookLogin().then(result => {
      this._userData = result;
      this._storeUser.push(this._userData.additionalUserInfo.profile);

      if(this._storeUser != null){
        this.toastrService.success(`${this._userData.additionalUserInfo.profile.name}, Nice to meet you!`);

        this.router.navigate(['/home/account/',this._userData.additionalUserInfo.profile.id]);
      }
      console.log(this._storeUser);
    });
  }

  signInWithGoogle() {
    this.authService.doGoogleLogin();
  }

  forgotPassword() {
    window.location.assign('https://www.facebook.com/login/identify?ctx=recover&lwv=111');
  }

}
