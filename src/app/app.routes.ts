import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormularioOComponent } from './pages/formulario-o/formulario-o.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { Error404Component } from './pages/error404/error404.component';
import { EditarPedidoComponent } from './pages/editar-pedido/editar-pedido.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { Error303Component } from './pages/error303/error303.component';
import { authGuard } from './guards/auth.guard';
import { FormularioUserComponent } from './pages/formulario-user/formulario-user.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'gOrden',component:FormularioOComponent,canActivate:[authGuard],data: { role: 'mesero' }},
    {path:'orden',component:OrdenesComponent,canActivate:[authGuard],data: { role: 'mesero' }},
    {path:'usuarios',component:UsuariosComponent,canActivate: [authGuard], data: { role: 'admin' }},
    { path: 'editar-orden/:idOrden', component: EditarPedidoComponent,canActivate:[authGuard],data: { role: 'mesero' }},
    { path: 'editar-user/:idUser', component: EditarUsuarioComponent,canActivate: [authGuard], data: { role: 'admin' }},
    {path:'noauth',component:Error303Component},
    {path:'agregarUser',component:FormularioUserComponent},
    {path:'**',component:Error404Component}


];
