import { Component, OnInit } from '@angular/core';
import { ActivitiesPatient } from 'src/app/models/ActivitiesPatient';
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.page.html',
  styleUrls: ['./list-activities.page.scss'],
})
export class ListActivitiesPage implements OnInit {

  activitiesList: ActivitiesPatient[];

  public getActivitiesList(){
    this.service.list().subscribe(p => {
      this.activitiesList = p;
    });
  }

  constructor(protected service: ActivitiesPatientService) { }

  ngOnInit() {
    this.getActivitiesList();
  }

}
