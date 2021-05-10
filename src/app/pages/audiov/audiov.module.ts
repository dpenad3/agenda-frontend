import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiovPageRoutingModule } from './audiov-routing.module';

import { AudiovPage } from './audiov.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiovPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AudiovPage]
})
export class AudiovPageModule {}
