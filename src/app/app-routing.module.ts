import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbulanceComponent } from './content/ambulance/ambulance.component';

const routes: Routes = [
  { path: 'ambulance', component: AmbulanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
