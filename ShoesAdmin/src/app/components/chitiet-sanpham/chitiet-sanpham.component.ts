import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { Subscription } from 'rxjs';
import { UploadFileService } from '../../services/uploadfile.service';
import { ChitietSanpham } from '../../models/ChitietSanpham';
import * as _ from "lodash";
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';
import { Upload } from '../../models/fileupload';

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
  id: number;
  public subscription: Subscription;
  public chitietSp: ChitietSanpham;
  public listgiay: LoaiGiay[]=[];

  constructor(
    private route: ActivatedRoute,
    private sanphamService: SanphamService,
    private router: Router,
    private loaigiayservice: LoaigiayService,
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getChitiet_SP(this.id);
    this.getLoaigiay();
  }

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
      
    },
      error => {
        console.log(error);
      });
  }
  //
  getLoaigiay() {
    this.loaigiayservice.getLoaiGiay().subscribe(data => {
      console.log(data);
      this.listgiay = data;
    }, error => {
      console.log(error);
    });
  }
  //
  goHangTrongKho(id) {
    this.router.navigate(['sanpham/hangtrongkho/', id]);
  }


}
