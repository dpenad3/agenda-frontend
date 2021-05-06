import { Component, OnInit } from '@angular/core';
import { EducationLevel } from 'src/app/models/EducationLevel';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { EducationLevelService } from 'src/app/services/educationLevel.service';
import { PatientService } from 'src/app/services/patient.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  RH = [
    'A+', 'A-','O+','O-','B+', 'B-','AB+','AB-'
  ]

  EducationLevels: EducationLevel[];

  ionicForm= new FormGroup({
    name: new FormControl(),
    birth_date: new FormControl(),
    ubication: new FormControl(),
    cellphone: new FormControl(),
    email: new FormControl(),
    eps: new FormControl(),
    rh: new FormControl(),
    password: new FormControl(),
    education_level: new FormControl()
  });

  submitForm() {
    this.serviceP.create(this.ionicForm.value).subscribe(m =>{
      Swal.fire('Nuevo Paciente',`${m.name} creado con exito!`,'success');
      this.router.navigate(['/login']);
    }, err=>{
      if(err.status === 400){
        Swal.fire('Error en el registro',`${err}`,'error');
      }
    });
  }

  public getEducationLevels(){
    this.service.list().subscribe(p => {
      this.EducationLevels = p;
    });
  }

  constructor(
    public formBuilder: FormBuilder, 
    protected service: EducationLevelService, 
    protected serviceP: PatientService,
    protected router:Router, 
    protected route:ActivatedRoute){}

  ngOnInit() {
    this.getEducationLevels();
  }

}
