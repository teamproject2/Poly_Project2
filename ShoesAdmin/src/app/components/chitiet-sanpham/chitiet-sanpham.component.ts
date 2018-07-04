import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { Subscription } from 'rxjs';
import { UploadFileService } from '../../services/uploadfile.service';
import { FileUpload } from '../../models/fileupload';
import { ChitietSanpham } from '../../models/ChitietSanpham';

@Component({
  selector: 'app-chitiet-sanpham',
  templateUrl: './chitiet-sanpham.component.html',
  styleUrls: ['./chitiet-sanpham.component.css'],
  providers: [UploadFileService]
})
export class ChitietSanphamComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  public title: string = 'Routing';
  // public chitietSp: ChitietSanpham[] = [];
  id: number;
  public subscription: Subscription;
  // @Input() chitietSp: ChitietSanpham;
  public chitietSp: ChitietSanpham;

  constructor(
    // 
    private route: ActivatedRoute,
    private sanphamService: SanphamService,
    private router: Router,
    private uploadService: UploadFileService
    // private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getChitiet_SP(this.id);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

  getChitiet_SP(id: number): void {
    this.sanphamService.getSanphamByID(id).subscribe(data => {
      this.chitietSp = data;
    },
      error => {
        console.log(error);
      });
  }

  goHangTrongKho(id) {
    this.router.navigate(['sanpham/hangtrongkho/', id]);
  }


}
