import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, EncodingType } from '@ionic-native/camera/ngx';
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
})
export class CamPage implements OnInit {

  image: any;
  id: number;

  constructor(public camera:Camera,
    protected router:Router, 
    protected route:ActivatedRoute,
    protected service: ActivitiesPatientService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  sacarCamara(){

    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1024,
      targetHeight: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado =>{
      this.image = "data:image/jpeg;base64," + resultado;
    }).catch(error =>{
      console.log(error);
    })
  }

  tomarGaleria(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1024,
      targetHeight: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado =>{
      this.image = "data:image/jpeg;base64," + resultado;
    }).catch(error =>{
      console.log(error);
    })
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
