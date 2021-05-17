import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  @Input() titulo: string;

  buttons: Button[]  = [
    {
      icon: 'alarm-outline',
      name: 'GESTIONAR ACTIVIDAD',
      redirecTo: '/type-activity'
    },
    {
      icon: 'mic-outline',
      name: 'REPORTAR ACTIVIDAD',
      redirecTo: '/type-act1'
    },
    {
      icon: 'list-circle-outline',
      name: 'REVISAR ACTIVIDADES',
      redirecTo: '/list-activities'
    },
    {
      icon: 'calendar-outline',
      name: 'VER CALENDARIO',
      redirecTo: '/calendar'
    },
  ]

  constructor(public alertC: AlertController, protected router:Router, ) { }

  ngOnInit() {
  }

  async cerrarSesion(){
    const alerta = await this.alertC.create({
      header: 'Cerrar Sesión',
      subHeader: 'Deberá volver a  iniciar sesión para ingresar',
      message: 'Esta seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancela');
          }
        },
        {
          text: 'Confirmar',
          handler: (blah) => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alerta.present();
  }
}

interface Button {
  icon: string;
  name: string;
  redirecTo: string;
}
