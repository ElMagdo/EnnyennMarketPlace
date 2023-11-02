import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerDashboard } from './screens/owner/ownerDashboard';
import { HomePage } from './screens/homepage/homePage';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomePage },
  { path: 'owner', component: OwnerDashboard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
