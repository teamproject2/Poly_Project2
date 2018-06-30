import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserData } from '../../../entity/user-data';
import { Customer } from '../../../entity/customer';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [AuthService, ToastrService]
})

export class UserProfileComponent implements OnInit {

  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";

  profileForm: FormGroup;
  email: FormControl;
  tenKhachHang: FormControl;
  soDienThoai: FormControl;
  diaChi: FormControl;


  _userData: any;
  _storeUser: Customer = {
    id: 0,
    tenKhachHang: '',
    diaChi: '',
    soDienThoai: '',
    email: '',
    idAccount: ''
  };

  newCustomer: Customer = {
    id: 0,
    tenKhachHang: '',
    diaChi: '',
    soDienThoai: '',
    email: '',
    idAccount: ''
  };

  constructor(private authService: AuthService,
    private toastr: ToastrService) {
    this.email = new FormControl('');
    this.tenKhachHang = new FormControl('');
    this.soDienThoai = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);
    this.diaChi = new FormControl('', Validators.required);

    this.profileForm = new FormGroup({
      email: this.email,
      tenKhachHang: this.tenKhachHang,
      soDienThoai: this.soDienThoai,
      diaChi: this.diaChi
    });

  }

  ngOnInit() {
    this.newCustomer = JSON.parse(sessionStorage.customer);
  }

  // Fixing
  updateProfile(formValues) {
    console.log(formValues.email + formValues.tenKhachHang);
    
    this.toastr.success('Cập nhật thông tin thành công!');
  }
}
