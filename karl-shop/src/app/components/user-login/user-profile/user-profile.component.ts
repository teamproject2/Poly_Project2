import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserData } from '../../../entity/user-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [AuthService]
})

export class UserProfileComponent implements OnInit {

  favoriteSeason: string;
  _userData: any;
  _storeUser: UserData[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  seasons = [
    'Nam',
    'Nữ'
  ];
}
