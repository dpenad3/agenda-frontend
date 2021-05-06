import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  buttons: Button[]  = [
    {
      icon: 'alarm-outline',
      name: 'Gestionar actividad',
      redirecTo: '/activity'
    },
    {
      icon: 'mic-outline',
      name: 'Reportar Actividad',
      redirecTo: '/options'
    },
    {
      icon: 'list-circle-outline',
      name: 'Revisar actividades',
      redirecTo: '/list-activities'
    },
    {
      icon: 'calendar-outline',
      name: 'Ver calendario',
      redirecTo: '/options'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Button {
  icon: string;
  name: string;
  redirecTo: string;
}
