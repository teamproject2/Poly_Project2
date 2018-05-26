import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { ProductCategoryComponent } from './components/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LeftBarComponent,
    ProductDetailComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
