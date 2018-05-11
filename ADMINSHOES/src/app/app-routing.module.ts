import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TableGridComponent } from './components/table-grid/table-grid.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { ProductComponent } from './components/product/product.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { TableEditComponent } from './components/table-edit/table-edit.component';


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
    path: 'table-basic',
    component: TableBasicComponent
  },
  {
    path: 'table-data',
    component: TableDataComponent
  },
  {
    path: 'table-grid',
    component: TableGridComponent
  },
  {
    path: 'table-edit',
    component: TableEditComponent
  },
  {
    path: 'form-layout',
    component:FormLayoutComponent
  },
  {
    path: 'form-element',
    component: FormElementComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
