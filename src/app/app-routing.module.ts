import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { CartComponent } from './checkout/cart/cart.component';
import { ReactiveFormComponent } from './checkout/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  // { path: 'cart', component: CartComponent },
  // { path: 'reactiveForm', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
