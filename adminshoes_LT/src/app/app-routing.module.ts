import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableKhachhangComponent } from './components/table-khachhang/table-khachhang.component';
import { TableSanphamComponent } from './components/table-sanpham/table-sanpham.component';
import { TableNhanvienComponent } from './components/table-nhanvien/table-nhanvien.component';
import { TableKhoComponent } from './components/table-kho/table-kho.component';
import { TableHoadonComponent } from './components/table-hoadon/table-hoadon.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ChatComponent } from './components/chat/chat.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormuserComponent } from './components/formuser/formuser.component';
import { FormproductComponent } from './components/formproduct/formproduct.component';
import { FormcustomerComponent } from './components/formcustomer/formcustomer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
// Khai báo Router
const appRoutes : Routes = [
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
    component: FormproductComponent
  },
  {
    path: 'form-user',
    component: FormuserComponent
  },
  {
    path: 'form-customer',
    component: FormcustomerComponent
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
// import Routers
@NgModule({
  imports: [RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
