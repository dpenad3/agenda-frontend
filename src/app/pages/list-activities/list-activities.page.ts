import { Component, OnInit } from '@angular/core';
import { ActivitiesPatient } from 'src/app/models/ActivitiesPatient';
import { ActivityType } from 'src/app/models/ActivityType';
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';
import { ActivityTypeService } from 'src/app/services/activityTypes.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.page.html',
  styleUrls: ['./list-activities.page.scss'],
})
export class ListActivitiesPage implements OnInit {

  activitiesList: ActivitiesPatient[];
  activityTypes: ActivityType[];

  public getActivitiesList(){
    this.service.list().subscribe(p => {
      this.activitiesList = p;
    });
  }

  public getActivitiesTypes(){
    this.serviceN.list().subscribe(p=> {
      this.activityTypes = p;
    })
  }

  constructor(
    protected service: ActivitiesPatientService, 
    protected serviceN: ActivityTypeService) { }

  ngOnInit() {
    this.getActivitiesList();
    this.getActivitiesTypes();
  }

}
