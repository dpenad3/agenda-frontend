import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

interface Button {
  icon: string;
  name: string;
  redirecTo: string;
}
