import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeActivityPage } from './type-activity.page';

const routes: Routes = [
  {
    path: '',
    component: TypeActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeActivityPageRoutingModule {}
