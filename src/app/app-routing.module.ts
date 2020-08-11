import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbulanceComponent } from './content/ambulance/ambulance.component';
import { MainMenuComponent } from './content/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', redirectTo: "/menu", pathMatch: 'full' },
  { path: 'menu', component: MainMenuComponent },
  { path: 'ambulance', component: AmbulanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
