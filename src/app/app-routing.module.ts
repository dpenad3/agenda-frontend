import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./pages/options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list-activities',
    loadChildren: () => import('./pages/list-activities/list-activities.module').then( m => m.ListActivitiesPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'activity/:id',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'type-activity',
    loadChildren: () => import('./pages/type-activity/type-activity.module').then( m => m.TypeActivityPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'type-act1',
    loadChildren: () => import('./pages/type-act1/type-act1.module').then( m => m.TypeAct1PageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./pages/text/text.module').then( m => m.TextPageModule)
  },
  {
    path: 'cam',
    loadChildren: () => import('./pages/cam/cam.module').then( m => m.CamPageModule)
  },
  {
    path: 'audiov',
    loadChildren: () => import('./pages/audiov/audiov.module').then( m => m.AudiovPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

