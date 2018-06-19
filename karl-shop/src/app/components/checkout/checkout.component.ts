import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from '../../services/toastr.service';
import { ProductSelected } from '../../entity/product-selected-cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  _productInCart:     ProductSelected[] = [];
  _sumOfMoney:        number = 0;

  checkoutForm: FormGroup;
  phoneNumber:  FormControl;
  address:      FormControl;
  email:        FormControl;
  name:         FormControl;
  note:         FormControl;

  namePattern   = "[a-zA-Z][a-zA-Z ]+";
  phonePattern  = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern  = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private toastrService: ToastrService) {
    this.name = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
    this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);
    this.address = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]);
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);
    this.note = new FormControl();

    this.checkoutForm = new FormGroup({
      name:         this.name,
      phoneNumber:  this.phoneNumber,
      address:      this.address,
      email:        this.email,
      note:         this.note
    });

  }

  ngOnInit() {
    if (sessionStorage.productInCart !== null) {
      this._productInCart = JSON.parse(sessionStorage.productInCart);

      this._productInCart.forEach(p => {
        this._sumOfMoney += p.donGia * (1 - p.chietKhau) * p.soLuong;
      })

      
    }
  }
  

  payment(formValues) {
    this.toastrService.success(`Thanh toán thành công!`)
    console.log(formValues);
  }

}
