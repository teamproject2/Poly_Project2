import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/product-content/products/products.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', loadChildren:'app/components/product-content/products.module#ProductsModule'},
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 
  constructor(private router: Router) {
    router.events.subscribe(() => {
      window.scrollTo(0,0);
    })
  }
}
