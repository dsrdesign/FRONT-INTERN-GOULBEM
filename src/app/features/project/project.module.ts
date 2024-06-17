import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AddProjectComponent } from './views/add-project/add-project.component';
import { ListProjectsComponent } from './views/list-projects/list-projects.component';
import { DetailProjectComponent } from './views/detail-project/detail-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './services/project.service';
import { ProjectResolver } from './resolvers/project.resolver';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpdateProjectComponent } from './views/update-project/update-project.component';


@NgModule({
  declarations: [
    AddProjectComponent,
    ListProjectsComponent,
    DetailProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
   providers: [
    ProjectService,
    ProjectResolver
   ]
})
export class ProjectModule { }
