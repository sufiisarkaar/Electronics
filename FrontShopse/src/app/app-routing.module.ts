import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JeansComponent } from './components/categories/jeans/jeans.component';

import { ShirtsComponent } from './components/categories/shirts/shirts.component';
import { ShoesComponent } from './components/categories/shoes/shoes.component';
import { SunglassComponent } from './components/categories/sunglass/sunglass.component';
import { TshirtsComponent } from './components/categories/tshirts/tshirts.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { MyOrderComponent } from './components/my-order/my-order.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'shirts', component: ShirtsComponent },
  { path: 'tshirts', component: TshirtsComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'sunglass', component: SunglassComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'myOrder', component: MyOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
