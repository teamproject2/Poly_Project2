import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableNhanvienComponent } from './components/table-nhanvien/table-nhanvien.component';
import { TableKhachhangComponent } from './components/table-khachhang/table-khachhang.component';
import { TableKhoComponent } from './components/table-kho/table-kho.component';
import { TableHoadonComponent } from './components/table-hoadon/table-hoadon.component';
import { TableSanphamComponent } from './components/table-sanpham/table-sanpham.component';
import { FormSanphamComponent } from './components/form-sanpham/form-sanpham.component';
import { FormKhachhangComponent } from './components/form-khachhang/form-khachhang.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ChatComponent } from './components/chat/chat.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
// import service
// import { NhanvienService } from './services/nhanvien.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    TableNhanvienComponent,
    TableKhachhangComponent,
    TableKhoComponent,
    TableHoadonComponent,
    TableSanphamComponent,
    FormSanphamComponent,
    FormKhachhangComponent,
    FormUserComponent,
    ChatComponent,
    ComingsoonComponent,
    ForgotpasswordComponent,
    InboxComponent,
    InvoiceComponent,
    LoginComponent,
    PagesComponent,
    RegisterComponent,
    TaskboardComponent,
    TimelineComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
