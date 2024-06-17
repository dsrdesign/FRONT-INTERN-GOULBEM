import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInternComponent } from './views/profile-intern/profile-intern.component';
import { ProfileInternResolver } from './resolver/profile-intern.resolver';

const routes: Routes = [
  {path: '', component: ProfileInternComponent, resolve: {intern: ProfileInternResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileInternRoutingModule { }
