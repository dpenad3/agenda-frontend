import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeActivityPageRoutingModule } from './type-activity-routing.module';

import { TypeActivityPage } from './type-activity.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeActivityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TypeActivityPage]
})
export class TypeActivityPageModule {}
