import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

// Component
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableNhanvienComponent } from './components/table-nhanvien/table-nhanvien.component';
import { TableKhachhangComponent } from './components/table-khachhang/table-khachhang.component';
import { TableHoadonComponent } from './components/table-hoadon/table-hoadon.component';
import { TableSanphamComponent } from './components/table-sanpham/table-sanpham.component';
import { FormSanphamComponent } from './components/form-sanpham/form-sanpham.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ChitietSanphamComponent } from './components/chitiet-sanpham/chitiet-sanpham.component';
import { ChitietkhohangComponent } from './components/chitietkhohang/chitietkhohang.component';
import { LoaigiayComponent } from './components/loaigiay/loaigiay.component';

// Khai báo Router
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sanpham', component: TableSanphamComponent},
  { path: 'sanpham/:id', component: ChitietSanphamComponent },
  { path: 'sanpham/hangtrongkho/:id', component: ChitietkhohangComponent },
  { path: 'nhanvien/:id', component: FormUserComponent },
  { path: 'nhanvien', component: TableNhanvienComponent },
  { path: 'chitietkhohang', component: ChitietkhohangComponent},
  { path: 'khachhang', component: TableKhachhangComponent },
  { path: 'hoadon', component: TableHoadonComponent },
  { path: 'hoadon/:id', component: InvoiceComponent },
  { path: 'form-product', component: FormSanphamComponent },
  { path: 'form-user', component: FormUserComponent },
  { path: 'User-Profile', component: UserprofileComponent },
  { path: 'chitiet-sp', component: ChitietSanphamComponent },
  { path: 'loaigiay', component: LoaigiayComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
