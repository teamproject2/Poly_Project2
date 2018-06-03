import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { ProductContentComponent } from "./product-content.component";
import { ProductCategoryComponent } from "./products/product-category/product-category.component";
const productRoutes: Routes = [
    {
        path:'',
        component: ProductContentComponent,
        children:[
            {path:'', component: ProductsComponent},
            {path:'products', component:ProductsComponent},
            {path:'category/:name', component: ProductCategoryComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {

}