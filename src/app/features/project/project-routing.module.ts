import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './views/list-projects/list-projects.component';
import { AddProjectComponent } from './views/add-project/add-project.component';
import { DetailProjectComponent } from './views/detail-project/detail-project.component';
import { ProjectResolver } from './resolvers/project.resolver';
import { UpdateProjectComponent } from './views/update-project/update-project.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddProjectComponent },
  {path: 'list', component: ListProjectsComponent },
  {path: 'list/:idProject', component: DetailProjectComponent, resolve:{project: ProjectResolver} },
  {path: 'edit/:idProject', component: UpdateProjectComponent, resolve:{project: ProjectResolver} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
