import { Component, OnInit, ViewContainerRef, createPlatformFactory } from '@angular/core';
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
  isInsert = false;

  public ChitietLoaigiay = {
    id: '',
    tenLoai: ''
  };
  //
  // frmLoaigiay: FormGroup;
  public Loaigiay:FormGroup;
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
    // this.id_Giay = new FormControl('', Validators.required);
    // this.ten_Giay = new FormControl('', [Validators.required, Validators.minLength(3)]);
    // 
    this.createForm();
    // this.Loaigiay = this.formBuilder.group({
    //   id_Giay: this.id_Giay,
    //   ten_Giay: this.ten_Giay
    // });
  }
  //
  createForm(){
    this.Loaigiay = this.formBuilder.group({
      ten_Giay: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]]
    })
  }
  // Phan trang
  showDataTable() {
    $(document).ready(function () {

      $('#table_lg').DataTable({
        "order": [[0, "desc"]]
      });
      $.fn.dataTable.ext.errMode = 'none';

    });
  }
  	//
	File_export(){
		$(document).ready(function() {
			var table = $('#table_lg').DataTable();
	 
			new $.fn.dataTable.Buttons( table, {
					buttons: [
						'copy', 'csv', 'excel', 'pdf', 'print'
					]
			} );
	 
			table.buttons( 0, null ).container().prependTo(
					table.table().container()
			);
	} );
	}
  // Load all loại giày
  loadDataGiay() {
    this.loaigiayservice.getLoaiGiay().subscribe(data => {
      this.list_giay = data;
      this.showDataTable();
      this.File_export();
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
    this.isInsert = true;
    this.getChitiet_Loạigiay(p);
    this.id = p;
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }

  showModalInsert() {
    this.isInsert = false;
    this.id = 0;
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }
  //
  showModalSave() {
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
          this.loadDataGiay();
          this.removeModal();
        },
        error => console.error(error)
      )
    } else {
      this.ChitietLoaigiay.tenLoai = this.Loaigiay.controls.ten_Giay.value;
      this.loaigiayservice.update_Loaigiay(this.ChitietLoaigiay).subscribe(
        result => {
          this.toastr.success('Cập nhật Loại giày thành công!');
          this.loadDataGiay();
          this.removeModal();
        },
        error => console.error(error)
      )
    }
  }
}
