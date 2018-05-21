import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { TableKhachhangComponent } from './components/table-khachhang/table-khachhang.component';
import { TableSanphamComponent } from './components/table-sanpham/table-sanpham.component';
import { TableNhanvienComponent } from './components/table-nhanvien/table-nhanvien.component';
import { TableKhoComponent } from './components/table-kho/table-kho.component';
import { TableHoadonComponent } from './components/table-hoadon/table-hoadon.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ChatComponent } from './components/chat/chat.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { PagesComponent } from './components/pages/pages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormuserComponent } from './components/formuser/formuser.component';
import { FormproductComponent } from './components/formproduct/formproduct.component';
import { FormcustomerComponent } from './components/formcustomer/formcustomer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    TableKhachhangComponent,
    TableSanphamComponent,
    TableNhanvienComponent,
    TableKhoComponent,
    TableHoadonComponent,
    InboxComponent,
    ChatComponent,
    TaskboardComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    ComingsoonComponent,
    TimelineComponent,
    ForgotpasswordComponent,
    FormuserComponent,
    FormproductComponent,
    FormcustomerComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
