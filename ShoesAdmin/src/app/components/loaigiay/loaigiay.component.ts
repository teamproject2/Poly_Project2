import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-loaigiay',
  templateUrl: './loaigiay.component.html',
  styleUrls: ['./loaigiay.component.css'],
  providers: [LoaigiayService]
})
export class LoaigiayComponent implements OnInit {
  public list_giay: LoaiGiay[] = [];
  public id_giay: LoaiGiay[] = [];
  id: number = 0;

  public ChitietLoaigiay = {
    id: '',
    tenLoai: ''
  };
  //
  Loaigiay: FormGroup;
  id_Giay: FormControl;
  ten_Giay: FormControl;
  //
  constructor(
    private loaigiayservice: LoaigiayService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _vcr: ViewContainerRef,
    private toastr: ToastsManager
  ) { this.toastr.setRootViewContainerRef(_vcr); }

  ngOnInit() {

    this.loadDataGiay();

    // this.id = this.route.snapshot.params['id'];
    this.id_Giay = new FormControl('', Validators.required);
    this.ten_Giay = new FormControl('', [Validators.required, Validators.minLength(3)]);

    this.Loaigiay = this.formBuilder.group({
      id_Giay: this.id_Giay,
      ten_Giay: this.ten_Giay
    });
  }
  // Load all loại giày
  loadDataGiay() {
    this.loaigiayservice.getLoaiGiay().subscribe(data => {
      // console.log(data);
      this.list_giay = data;
    }, error => {
      console.log(error);
    });
  }
  //
  getChitiet_Loạigiay(id: number): void {
    this.loaigiayservice.getLoaigiaybyID(id).subscribe(data => {
      this.ChitietLoaigiay = data;
      // console.log(this.ChitietLoaigiay);
    },
      error => {
        console.log(error);
      });
  }

  //
  showModalUpdate(p: number) {
    this.getChitiet_Loạigiay(p);
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }

  showModalInsert() {
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }
  //
  showModalSave(p: number) {
    this.id = p;
    $(document).ready(function () {
      $('.modal1').removeClass('show');
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
  saveLoaigiay() {
    if (this.id == 0) {
      let object = { tenLoai: this.Loaigiay.controls.ten_Giay.value };
      this.loaigiayservice.insert_Loaigiay(object).subscribe(
        result => {
          this.toastr.success('Thêm mới Loại giày thành công!');
          // setTimeout(() => {
          //   this.router.navigate(['/loaigiay']);
          // }, 1500);
        },
        error => console.error(error)
      )
    } else {
      this.loaigiayservice.update_Loaigiay(this.id).subscribe(
        result => {
          this.toastr.success('Cập nhật Loại giày thành công!');
          //   setTimeout(() => {
          //     this.router.navigate(['/loaigiay']);
          //   }, 1500);
        },
        error => console.error(error)
      )
    }
  }
}
