import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecretComponent} from './components/secret/secret.component';
import {SecretListComponent} from './components/secretList/secret-list/secret-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'secrets', pathMatch: 'full'},
  {path: 'secrets', component: SecretListComponent},
  {path: 'secrets/:secretId', component: SecretComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
