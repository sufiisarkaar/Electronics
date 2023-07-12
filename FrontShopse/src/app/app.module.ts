import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { MinicartComponent } from './components/minicart/minicart.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { UpBannerComponent } from './components/up-banner/up-banner.component';
import { DownBannerComponent } from './components/down-banner/down-banner.component';
import { MenComponent } from './components/categories/men/men.component';
import { KidsComponent } from './components/categories/kids/kids.component';
import { WomenComponent } from './components/categories/women/women.component';
import { TshirtsComponent } from './components/categories/tshirts/tshirts.component';
import { JeansComponent } from './components/categories/jeans/jeans.component';
import { SunglassComponent } from './components/categories/sunglass/sunglass.component';
import { ShirtsComponent } from './components/categories/shirts/shirts.component';
import { ShoesComponent } from './components/categories/shoes/shoes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MyOrderComponent } from './components/my-order/my-order.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginUserComponent,
    MinicartComponent,
    RegisterUserComponent,
    ProfileUserComponent,
    CategoriesComponent,
    ProductsComponent,
    UpBannerComponent,
    DownBannerComponent,
    MenComponent,
    KidsComponent,
    WomenComponent,
    TshirtsComponent,
    JeansComponent,
    SunglassComponent,
    ShirtsComponent,
    ShoesComponent,
    MyOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
