import { Component, OnInit } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


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
  public id_giay: LoaiGiay []=[];
  id: number= 0;

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
    this.loadDataGiay();

    this.getChitiet_Loạigiay(this.id);
    this.id = this.route.snapshot.params['id'];
    console.log("ID: "+ this.id);
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
    console.log(this.ChitietLoaigiay);
    
  },
    error => {
      console.log(error);
    });
}
//
  showModal(giay: any) {
    this.id = giay;
    console.log("id test"+this.id);
    
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

}
