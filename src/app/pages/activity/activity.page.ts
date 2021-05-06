import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityType } from 'src/app/models/ActivityType';
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';
import { ActivityTypeService } from 'src/app/services/activityTypes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  activityType: ActivityType[];

  ionicForm= new FormGroup({
    name: new FormControl(),
    activity_type: new FormControl(),
    report: new FormControl(),
    patient: new FormControl(),
  });

  submitForm() {
    this.service.create(this.ionicForm.value).subscribe(m =>{
      Swal.fire('Nueva actividad',`${m.name} creada con exito!`,'success');
      this.router.navigate(['/list-activities']);
    }, err=>{
      if(err.status === 400){
        Swal.fire('Error en el registro',`${err}`,'error');
      }
    });
  }

  public getActivitiesTypes(){
    this.serviceT.list().subscribe(p => {
      this.activityType = p;
    });
  }

  constructor(
    public formBuilder: FormBuilder, 
    protected service: ActivitiesPatientService, 
    protected serviceT: ActivityTypeService,
    protected router:Router, 
    protected route:ActivatedRoute){}

  ngOnInit() {
    this.getActivitiesTypes();
  }

}


