import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamPageRoutingModule } from './cam-routing.module';

import { CamPage } from './cam.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CamPage]
})
export class CamPageModule {}
