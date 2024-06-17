import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InternRoutingModule } from './intern-routing.module';
import { AddInternComponent } from './views/add-intern/add-intern.component';
import { ListInternsComponent } from './views/list-interns/list-interns.component';
import { DetailInternComponent } from './views/detail-intern/detail-intern.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { InternService } from './services/intern.service';
import { InternResolver } from './resolvers/intern.resolver';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpdateInternComponent } from './views/update-intern/update-intern.component';


@NgModule({
  declarations: [
    AddInternComponent,
    ListInternsComponent,
    DetailInternComponent,
    UpdateInternComponent,
  ],
  imports: [
    CommonModule,
    InternRoutingModule,
    NgxMaskModule.forRoot({ validation: true}), // Ngx-mask
    ReactiveFormsModule,
    NgbDropdownModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    InternService, 
    InternResolver,
  ]
})
export class InternModule { }
