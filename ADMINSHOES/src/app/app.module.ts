import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { AppRoutingModule } from './/app-routing.module';
import { TableGridComponent } from './components/table-grid/table-grid.component';
import { TableEditComponent } from './components/table-edit/table-edit.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { ProductComponent } from './components/product/product.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    IndexComponent,
    SidebarmenuComponent,
    TableBasicComponent,
    TableDataComponent,
    TableGridComponent,
    TableEditComponent,
    FormElementComponent,
    FormLayoutComponent,
    FormValidationComponent,
    ProductComponent,
    InvoiceComponent,
    UserProfileComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
