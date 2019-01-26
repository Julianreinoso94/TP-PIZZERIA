import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OffersComponent } from 'src/app/components/offers/offers.component';
//import { DetailsBookComponent } from './components/details-book/details-book.component';
//import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ProfileComponent } from 'src/app/components/users/profile/profile.component';
//import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth-guard';
import { AbmlocalesComponent } from 'src/app/components/abmlocales/abmlocales.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { PedidosComponent } from 'src/app/components/pedidos/pedidos.component';
import { ReservasComponent } from 'src/app/components/reservas/reservas.component';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios.component';
import { EstadisticasComponent } from 'src/app/components/estadisticas/estadisticas.component';






const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
  //{ path: 'book/:id', component: DetailsBookComponent },
  //{ path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] },
  { path: 'user/abmlocales', component: AbmlocalesComponent },
  { path: 'user/productos', component: ProductosComponent },
  { path: 'user/pedidos', component: PedidosComponent },
  { path: 'user/reservas', component: ReservasComponent },
  { path: 'user/usuarios', component: UsuariosComponent },
  { path: 'admin/estadisticas', component: EstadisticasComponent },


  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }//,
  //{ path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }