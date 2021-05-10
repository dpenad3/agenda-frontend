import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiovPage } from './audiov.page';

const routes: Routes = [
  {
    path: '',
    component: AudiovPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiovPageRoutingModule {}
