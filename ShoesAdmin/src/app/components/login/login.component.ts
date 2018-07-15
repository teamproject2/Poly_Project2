import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.username);
    console.log(this.password);
    
    
    this.router.navigate(['/index']);
  }

}
