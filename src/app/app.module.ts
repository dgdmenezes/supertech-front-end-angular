import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './components/pages/address-form/address-form.component';
import { AddressFormUpdateComponent } from './components/pages/address-form-update/address-form-update.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { CustomerPageComponent } from './components/pages/customer-page/customer-page.component';
import { Err404Component } from './components/pages/err404/err404.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoggedComponent } from './components/pages/logged/logged.component';
import { LoginFormComponent } from './components/pages/login-form/login-form.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { RegisterCustomerPageComponent } from './components/pages/register-customer-page/register-customer-page.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderTopComponent } from './components/molecules/header-top/header-top.component';
import { HeaderNavBarComponent } from './components/molecules/header-nav-bar/header-nav-bar.component';
import { WhatsappFloaterComponent } from './components/molecules/whatsapp-floater/whatsapp-floater.component';
import { HeaderLogoComponent } from './components/atoms/header-logo/header-logo.component';
import { HeaderSearchBarComponent } from './components/atoms/header-search-bar/header-search-bar.component';
import { HeaderSearchDropDownIconLoginComponent } from './components/atoms/header-search-drop-down-icon-login/header-search-drop-down-icon-login.component';
import { HeaderSearchCartIconComponent } from './components/atoms/header-search-cart-icon/header-search-cart-icon.component';
import { HeaderNavBarDropDownMenuComponent } from './components/atoms/header-nav-bar-drop-down-menu/header-nav-bar-drop-down-menu.component';
import { HeaderNavBarFixedMenuComponent } from './components/atoms/header-nav-bar-fixed-menu/header-nav-bar-fixed-menu.component';
import { HomeCarouselComponent } from './components/molecules/home-carousel/home-carousel.component';
import { CardGroupComponent } from './components/organisms/card-group/card-group.component';
import { CardItemComponent } from './components/molecules/card-item/card-item.component';
import { AddShoppingCartIconComponent } from './components/icons/add-shopping-cart-icon/add-shopping-cart-icon.component';
//Localização PT-BR
import { registerLocaleData } from '@angular/common';
import localePT from "@angular/common/locales/pt";
import { ProductReviewComponent } from './components/molecules/product-review/product-review.component';
import { ProductSpecsComponent } from './components/molecules/product-specs/product-specs.component';
import { ProductShowComponent } from './components/molecules/product-show/product-show.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(localePT)

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    AddressFormUpdateComponent,
    CartPageComponent,
    CategoryPageComponent,
    CheckoutPageComponent,
    CustomerPageComponent,
    Err404Component,
    HomeComponent,
    LoggedComponent,
    LoginFormComponent,
    LogoutComponent,
    ProductPageComponent,
    RegisterCustomerPageComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderNavBarComponent,
    WhatsappFloaterComponent,
    HeaderLogoComponent,
    HeaderSearchBarComponent,
    HeaderSearchDropDownIconLoginComponent,
    HeaderSearchCartIconComponent,
    HeaderNavBarDropDownMenuComponent,
    HeaderNavBarFixedMenuComponent,
    HomeCarouselComponent,
    CardGroupComponent,
    CardItemComponent,
    AddShoppingCartIconComponent,
    ProductReviewComponent,
    ProductSpecsComponent,
    ProductShowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
