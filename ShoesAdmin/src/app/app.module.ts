// import thu vien
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// import Components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableNhanvienComponent } from './components/table-nhanvien/table-nhanvien.component';
import { TableKhachhangComponent } from './components/table-khachhang/table-khachhang.component';
import { TableHoadonComponent } from './components/table-hoadon/table-hoadon.component';
import { TableSanphamComponent } from './components/table-sanpham/table-sanpham.component';
import { FormSanphamComponent } from './components/form-sanpham/form-sanpham.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ChitietSanphamComponent } from './components/chitiet-sanpham/chitiet-sanpham.component';
import { ChitietkhohangComponent } from './components/chitietkhohang/chitietkhohang.component';


// import service
import { UserService } from './services/user.service';
import { SanphamService } from './services/sanpham.service';
import {HoadonService } from './services/hoadon.service';
import { KichthuocService } from './services/kichthuoc.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaigiayComponent } from './components/loaigiay/loaigiay.component';
import { LoaigiayService } from './services/loaigiay.service';
import { UploadFileService } from './services/uploadfile.service';
import { DetailsUploadComponent } from './components/details-upload/details-upload.component';
import { ListUploadComponent } from './components/list-upload/list-upload.component';

@NgModule({
  // khai bao component
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    TableNhanvienComponent,
    TableKhachhangComponent,
    TableHoadonComponent,
    TableSanphamComponent,
    FormSanphamComponent,
    FormUserComponent,
    InvoiceComponent,
    ChitietSanphamComponent,
    ChitietkhohangComponent,
    LoaigiayComponent,
    DetailsUploadComponent,
    ListUploadComponent
  ],
  // import thu vien
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  // Import services
  providers: [
    UserService,
    SanphamService,
    HoadonService,
    KichthuocService,
    LoaigiayService,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
