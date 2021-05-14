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


  activityType: number;
  new_date;
  new_time;

  ionicForm= new FormGroup({
    name: new FormControl(),
    activity_type: new FormControl(),
    text: new FormControl(),
    patient: new FormControl(),
    date: new FormControl(),
    time: new FormControl()
  });

  submitForm() {
    this.ionicForm.controls.text.setValue('Sin reporte');
    this.ionicForm.controls.patient.setValue(1);
    this.ionicForm.controls.activity_type.setValue(this.activityType);
    this.new_date = this.ionicForm.controls.date.value.split('T')[0];
    this.ionicForm.controls.date.setValue(this.new_date);
    this.new_time = this.ionicForm.controls.time.value.split('T')[1];
    this.ionicForm.controls.time.setValue(this.new_time);
    this.service.create(this.ionicForm.value).subscribe(m =>{
      Swal.fire('Nueva actividad',`${m.name} creada con exito!`,'success');
      this.router.navigate(['/list-activities']);
    }, err=>{
      if(err.status === 400){
        Swal.fire('Error en el registro',`${err}`,'error');
      }
    });
  }

  constructor(
    public formBuilder: FormBuilder, 
    protected service: ActivitiesPatientService, 
    protected serviceT: ActivityTypeService,
    protected router:Router, 
    protected route:ActivatedRoute){}

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.activityType = id;
  }


}


