import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInternsComponent } from './views/list-interns/list-interns.component';
import { AddInternComponent } from './views/add-intern/add-intern.component';
import { DetailInternComponent } from './views/detail-intern/detail-intern.component';
import { InternResolver } from './resolvers/intern.resolver';
import { UpdateInternComponent } from './views/update-intern/update-intern.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddInternComponent },
  {path: 'list', component: ListInternsComponent },
  {path: 'list/:idIntern', component: DetailInternComponent, resolve:{intern: InternResolver}  },
  {path: 'edit', component: UpdateInternComponent, resolve:{intern: InternResolver}  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }
