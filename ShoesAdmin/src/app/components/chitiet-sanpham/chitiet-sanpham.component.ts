import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { Subscription } from 'rxjs';
import { UploadFileService } from '../../services/uploadfile.service';
import { ChitietSanpham } from '../../models/ChitietSanpham';
import * as _ from "lodash";
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';
import { Upload } from '../../models/fileupload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

// jquyery phan trang
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-chitiet-sanpham',
  templateUrl: './chitiet-sanpham.component.html',
  styleUrls: ['./chitiet-sanpham.component.css'],
  providers: [UploadFileService]
})
export class ChitietSanphamComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;
  _downloadArray: any[];
  public title: string = 'Routing';
  id: number = 0;
  public subscription: Subscription;

  public listgiay: LoaiGiay[] = [];

  selectedValue: string;
  //
  public chitietSp: any;

  loaiGiayAA: LoaiGiay;

  selectedTenLoai : string;

  //
  chitietSanpham: FormGroup;
  idSp: FormControl;
  tenSanPham: FormControl;
  // tenloaigiay: FormControl;
  donGia: FormControl;
  chietKhau: FormControl;
  chiTiet: FormControl;



  constructor(
    private route: ActivatedRoute,
    private sanphamService: SanphamService,
    private router: Router,
    private loaigiayservice: LoaigiayService,
    private uploadService: UploadFileService,
    private formBuilder: FormBuilder,
    private _vcr: ViewContainerRef,
    private toastr: ToastsManager
  ) { this.toastr.setRootViewContainerRef(_vcr); }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id != 0) {
      this.getChitiet_SP(this.id);
    }

    //
    this.idSp = new FormControl('', Validators.required);
    this.tenSanPham = new FormControl('', [Validators.required, Validators.minLength(3)]);
    // this.tenloaigiay = new FormControl('', Validators.required);
    this.donGia = new FormControl('', Validators.required);
    this.chietKhau = new FormControl('', Validators.required);
    this.chiTiet = new FormControl('', Validators.required);

    this.chitietSanpham = this.formBuilder.group({
      idSp: this.idSp,
      tenSanPham: this.tenSanPham,
      // tenloaigiay: this.chitietSp.loaiGiay,
      donGia: this.donGia,
      chietKhau: this.chietKhau,
      chiTiet: this.chiTiet
    });

    this.onChanges();
  }

  //
  //
  onChanges(): void {
    this.chitietSanpham.valueChanges.subscribe(val => {
      this.chitietSp.id = val.idSp.length > 0 ? val.idSp : this.chitietSp.id;
      this.chitietSp.tenSanPham = val.tenSanPham.length > 0 ? val.tenSanPham : this.chitietSp.tenSanPham;
      this.chitietSp.chiTiet = val.chiTiet.length > 0 ? val.chiTiet : this.chitietSp.chiTiet;;
      this.chitietSp.chietKhau = val.chietKhau.length > 0 ? val.chietKhau : this.chitietSp.chietKhau;
      this.chitietSp.donGia = val.donGia.length > 0 ? val.donGia : this.chitietSp.donGia;
      // this.chitietSp.loaiGiay = val.tenloaigiay.length > 0 ? val.tenloaigiay : this.chitietSp.loaiGiay;

      console.log("sdsdaSPPPPP: " + JSON.stringify(this.chitietSp));
    });
  }
  //
//
showModal(p: number) {
  this.id = p;
  $(document).ready(function () {
    $('.modal1').addClass('show');
    $('.modal2').addClass('show');
    $('.modal-wrapper').addClass('show');
  });
}

removeModal() {
  $(document).ready(function () {
    $('.modal1').removeClass('show');
    $('.modal2').removeClass('show');
    $('.modal-wrapper').removeClass('show');
  });
}

//

  saveSanpham() {
    if(this.selectedTenLoai == 'none'){
      alert('Select LG');
    }
    this.sanphamService.update_Sp(this.id).subscribe(
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


  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadMulti() {
    let files = this.selectedFiles;
    let filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.uploadService.pushUpload(this.currentUpload)
    });
  }

  //Fixing
  getListImg() {
    this.uploadService.getFileUploads(100).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(file => {
      this._downloadArray = file;
      console.log(this._downloadArray);
    });

    // this.currentFileUpload = new FileUpload(file);
    // this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

  getChitiet_SP(id: number): void {
    this.sanphamService.getSanphamByID(id).subscribe(data => {
      this.chitietSp = data;
      this.loaiGiayAA = this.chitietSp.loaiGiay;
      this.getLoaigiay();
    },
      error => {
        console.log(error);
      });
  }
  //
  getLoaigiay() {
    this.loaigiayservice.getLoaiGiay().subscribe(data => {
      this.listgiay = data;
      console.log(this.listgiay);
    }, error => {
      console.log(error);
    });
  }
  //
  goHangTrongKho(id) {
    this.router.navigate(['sanpham/hangtrongkho/', id]);
  }

  compareLoaiGiay(t1: LoaiGiay, t2: LoaiGiay): boolean {
    return t1 && t2 ? t1.tenLoai === t2.tenLoai : t1 === t2;
  }

  getNewLG(event) {
    this.listgiay.forEach(p=>{
      if(p.tenLoai == event.target.value && event.target.value != 'none'){
        this.chitietSp.loaiGiay.id = p.id;
        this.chitietSp.loaiGiay.tenLoai = p.tenLoai;
      }
      if(event.target.value == 'none'){
        this.selectedTenLoai = 'none';
      }
    });
    console.log("Value : " + JSON.stringify(this.chitietSp.loaiGiay));
  }
  
}
