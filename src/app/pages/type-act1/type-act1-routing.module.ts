import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeAct1Page } from './type-act1.page';

const routes: Routes = [
  {
    path: '',
    component: TypeAct1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeAct1PageRoutingModule {}
