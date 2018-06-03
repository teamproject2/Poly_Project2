import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./products/products.component";
import { ProductContentComponent } from "./product-content.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CartComponent } from "../cart/cart.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { IndexComponent } from "../index/index.component";
import { HomeComponent } from "../home/home.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductCategoryComponent } from "./products/product-category/product-category.component";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports:[
        CommonModule,
        ProductsRoutingModule,
        NgxPaginationModule
    ],
    declarations:[
        ProductsComponent,
        ProductCategoryComponent,
        ProductContentComponent    ]
})
export class ProductsModule {

}