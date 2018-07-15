import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SanphamService } from '../../services/sanpham.service';
import { Router } from '../../../../node_modules/@angular/router';

// jquyery phan trang
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-form-sanpham',
  templateUrl: './form-sanpham.component.html',
  styleUrls: ['./form-sanpham.component.css']
})
export class FormSanphamComponent implements OnInit {

  public listgiay: LoaiGiay[] = [];
  selectedTenLoai: string;
  //
  public Sanpham = {
    id: '',
    tenSanPham: '',
    tenLoaigiay: '',
    donGia: '',
    chietKhau: '',
    chitiet: ''
  };

  chitietSanpham: FormGroup;
  idSp: FormControl;
  tenSanPham: FormControl;
  donGia: FormControl;
  chietKhau: FormControl;
  chiTiet: FormControl;





  constructor(
    private loaigiayservice: LoaigiayService,
    private formBuilder: FormBuilder,
    private _vcr: ViewContainerRef,
    private router: Router,
    private toastr: ToastsManager,
    private sanphamService: SanphamService
  ) { this.toastr.setRootViewContainerRef(_vcr) };

  ngOnInit() {
    this.getLoaigiay();
  }

  // Lay tat ca loai giay
  getLoaigiay() {
    this.loaigiayservice.getLoaiGiay().subscribe(data => {
      this.listgiay = data;
    }, error => {
      console.log(error);
    });
  }
  //
  showModal() {
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }

  removeModal() {
    $(document).ready(function () {
      $('.modal1').removeClass('show');
      $('.modal-wrapper').removeClass('show');
    });
  }

  // Luu san pham
  Saveinsertsp() {
    setTimeout(() => {
      this.router.navigate(['/sanpham']);
    }, 1500);
    // if (this.selectedTenLoai == 'none') {
    //   alert('Select LG');
      let object = { 
        tenSanPham: this.chitietSanpham.controls.tenSanPham.value
       };
    this.sanphamService.insert_Sp(object).subscribe(
      result => {
        this.removeModal();
          this.toastr.success('Cập nhật thông tin sản phẩm thành công!');
          setTimeout(() => {
            this.router.navigate(['/sanpham']);
          }, 1500);
        },
        error => console.error(error)
      )
    }
  //

}


