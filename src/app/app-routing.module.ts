import { LoginFormComponent } from './components/pages/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterCustomerPageComponent } from './components/pages/register-customer-page/register-customer-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component:LoginFormComponent},
  {path: "register", component:RegisterCustomerPageComponent},
  {path: "product/:id", component:ProductPageComponent},
  {path: "category/:categoryName", component:CategoryPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
