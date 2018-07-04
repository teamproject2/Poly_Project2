import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../../models/fileupload';
import { UploadFileService } from '../../services/uploadfile.service';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css'],
  providers: [UploadFileService]
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: FileUpload;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }

}
