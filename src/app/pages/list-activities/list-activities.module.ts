import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActivitiesPageRoutingModule } from './list-activities-routing.module';

import { ListActivitiesPage } from './list-activities.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActivitiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListActivitiesPage]
})
export class ListActivitiesPageModule {}
