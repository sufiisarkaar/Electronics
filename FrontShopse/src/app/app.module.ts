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
    DownBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
