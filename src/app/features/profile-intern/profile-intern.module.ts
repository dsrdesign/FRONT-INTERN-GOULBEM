import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileInternRoutingModule } from './profile-intern-routing.module';
import { ProfileInternComponent } from './views/profile-intern/profile-intern.component';
import { ProfileInternResolver } from './resolver/profile-intern.resolver';


@NgModule({
  declarations: [
    ProfileInternComponent
  ],
  imports: [
    CommonModule,
    ProfileInternRoutingModule
  ],
  providers: [ProfileInternResolver]
})
export class ProfileInternModule { }
