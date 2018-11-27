import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { IndexComponent }      from './index/index.component';
import { ClientFormComponent }      from './client-form/client-form.component';
import { ClientsListComponent }      from './clients-list/clients-list.component';

import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar_cliente', component: ClientFormComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientsListComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}