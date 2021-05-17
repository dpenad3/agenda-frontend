import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {

  id: number;

  constructor(protected router:Router, 
    protected route:ActivatedRoute,
    protected service: ActivitiesPatientService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmitTemplate(){
    this.service.delete(this.id).subscribe(m =>{
      Swal.fire('Actividad reportada','success');
      this.router.navigate(['/options']);
    }, err=>{
      if(err.status === 400){
        Swal.fire('Error en el reporte',`${err}`,'error');
      }
    });
  }
}
