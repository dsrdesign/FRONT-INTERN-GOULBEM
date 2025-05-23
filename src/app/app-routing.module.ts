import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './shared/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path:'profile', loadChildren: () => import('./features/profile-intern/profile-intern.module').then(m => m.ProfileInternModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'intern',
        loadChildren: () => import('./features/intern/intern.module').then(m => m.InternModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./features/project/project.module').then(m => m.ProjectModule)
      },
      
      {
        path: 'general',
        loadChildren: () => import('./shared/pages/general/general.module').then(m => m.GeneralModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { 
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
