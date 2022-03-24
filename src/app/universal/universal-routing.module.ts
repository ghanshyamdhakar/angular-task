import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversalComponent } from './universal.component';
import { ProductComponent } from 'src/app/universal/product/product.component';

const routes: Routes = [
  { path: 'product/:category/:subcategory/:color', component: ProductComponent },
  { path: 'product/:category/:subcategory', component: ProductComponent },
  { path: 'product/:category', component: ProductComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: UniversalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
