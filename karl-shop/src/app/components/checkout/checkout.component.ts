import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from '../../services/toastr.service';
import { ProductSelected } from '../../entity/product-selected-cart';
import { Customer } from '../../entity/customer';
import { HoaDonService } from '../../services/hoadon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [HoaDonService]
})
export class CheckoutComponent implements OnInit {

  _productInCart: ProductSelected[] = [];

  _sumOfMoney: number = 0;
  customer: Customer = {
    id: 0,
    tenKhachHang: '',
    diaChi: '',
    soDienThoai: '',
    email: '',
    idAccount: ''
  };

  checkoutForm: FormGroup;
  phoneNumber: FormControl;
  address: FormControl;
  email: FormControl;
  name: FormControl;
  note: FormControl;

  // namePattern = "[a-zA-Z][a-zA-Z ]+";
  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private toastrService: ToastrService, private hoaDonService: HoaDonService) {

    this.name = new FormControl('', Validators.required);
    this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);
    this.address = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]);
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);
    this.note = new FormControl();

    this.checkoutForm = new FormGroup({
      name: this.name,
      phoneNumber: this.phoneNumber,
      address: this.address,
      email: this.email,
      note: this.note
    });

  }

  ngOnInit() {
    if (sessionStorage.customer != null) {
      this.customer = JSON.parse(sessionStorage.customer);
    }

    if (sessionStorage.productInCart !== null) {
      this._productInCart = JSON.parse(sessionStorage.productInCart);
      this._productInCart.forEach(p => {
        this._sumOfMoney += p.donGia * (1 - p.chietKhau) * p.soLuong;
      })
    }
  }


  payment(formValues) {
    this.toastrService.success(`Chúc mừng ${formValues.name} đã thanh toán thành công!`);
    //clear form after customer submit
    this.checkoutForm.reset();
    //clear session data after customer submit
    sessionStorage.productInCart = [];
    this._productInCart = [];

    //reset money after customer submit
    this._sumOfMoney = 0;
  }

  saveHoaDon(){
    let listCTHD = [];
    let index = 0;
    this._productInCart.forEach(
      p => {
        let object = {sanPhamId:p.id, soLuong: p.soLuong, tenKichThuoc: p.tenKichThuoc, thanhTien: p.donGia*(1-p.chietKhau)*p.soLuong};
        listCTHD[index] = object;
        index++;        
      }
    )

    //Ghi chú chưa lấy được
    let ghiChu = document.getElementById('note').innerHTML;
    let hoaDon = {ghiChu: ghiChu, tongTien: this._sumOfMoney, listCTHD: listCTHD};
    let khachHangId = JSON.parse(sessionStorage.customer).id;
    console.log("Hoa don: " + JSON.stringify(hoaDon));
    console.log("Khach hang id: " + khachHangId);
    this.hoaDonService.saveHoaDon(khachHangId, hoaDon).subscribe(
      result => console.log(result),
      error => console.error("Error " + error)
    );
  }
}
