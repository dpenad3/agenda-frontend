import { Component, OnInit } from '@angular/core';
import { ActivitiesPatient } from 'src/app/models/ActivitiesPatient';
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';

@Component({
  selector: 'app-type-act1',
  templateUrl: './type-act1.page.html',
  styleUrls: ['./type-act1.page.scss'],
})
export class TypeAct1Page implements OnInit {

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
