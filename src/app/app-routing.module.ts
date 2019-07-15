import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdGetComponent } from './product/product-get/product-get.component';
import { ProdAddComponent } from './product/product-add/product-add.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductAddtoCartComponent } from './product/product-addto-cart/product-addto-cart.component';

const routes: Routes = [
  {path:'prod/create',component:ProdAddComponent},
  {path:'prod/allProd',component:ProdGetComponent},
  {path: 'prod/delete/:prodId',component:ProductDeleteComponent},
  {path: 'prod/update/:prodId/:price',component:ProductUpdateComponent},
  {path: 'prod/addtoCart/:prodId',component:ProductAddtoCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
