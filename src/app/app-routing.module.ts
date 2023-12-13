import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { loginAuthGuard } from './guards/login-auth.guard';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { FooterComponent } from './pages/footer/footer.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'cart', component: CartComponent, canActivate: [loginAuthGuard]},
  { path: 'footer', component: FooterComponent },
  { path: 'invoice', component:InvoiceComponent },
  { path: '', component: LoginComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
