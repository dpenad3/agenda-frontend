import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeAct1PageRoutingModule } from './type-act1-routing.module';

import { TypeAct1Page } from './type-act1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeAct1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [TypeAct1Page]
})
export class TypeAct1PageModule {}
