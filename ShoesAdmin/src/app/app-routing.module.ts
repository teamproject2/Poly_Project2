import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Component
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


// Khai báo Router
const routes: Routes = [
    {
        path: '',
        redirectTo : '/dashboard',
        pathMatch : 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'table-sanpham',
        component: TableSanphamComponent
      },
      {
        path: 'table-nhanvien',
        component: TableNhanvienComponent
      },
      {
        path: 'table-kho',
        component: TableKhoComponent
      },
      {
        path: 'table-khachhang',
        component: TableKhachhangComponent
      }, 
       {
        path: 'table-hoadon',
        component: TableHoadonComponent
      },
      {
        path: 'form-product',
        component: FormSanphamComponent
      },
      {
        path: 'form-user',
        component: FormUserComponent
      },
      {
        path: 'form-customer',
        component: FormKhachhangComponent
      },
      {
        path: 'Invoice',
        component: InvoiceComponent
      },
      {
        path: 'User-Profile',
        component: UserprofileComponent
      },
      {
        path: 'Marketing',
        component: TaskboardComponent
      }
      
    ]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
