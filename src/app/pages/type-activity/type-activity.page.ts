import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-activity',
  templateUrl: './type-activity.page.html',
  styleUrls: ['./type-activity.page.scss'],
})
export class TypeActivityPage implements OnInit {

  @Input() titulo: string;

  buttons: Button[]  = [
    {
      icon: 'game-controller-outline',
      id:3,
      name: "LÚDICA",
      description: "Estimulan la concentración y agilidad mental",
      redirecTo: '/activity/3'
    },
    {
      icon: 'library-outline',
      name: 'INTELECTUAL',
      id:4,
      description:"Aumentan el número de conexiones de neuronas",
      redirecTo: '/activity/4'
    },
    {
      icon: 'barbell-outline',
      name: 'FÍSICA',
      id:5,
      description:"Son más propensos a mantener los conocimientos que los inactivos físicamente",
      redirecTo: '/activity/5'
    },
    {
      icon: 'people-circle-outline',
      name: 'SOCIAL',
      id:2,
      description:"La interacción familiar mejora las funciones",
      redirecTo: '/activity/2'
    },
    {
      icon: 'bandage-outline',
      name: 'AUTOCUIDADO',
      id:6,
      description:"Se aumentan las capacidades y fortalezas",
      redirecTo: '/activity/6'
    },
    {
      icon: 'medical-outline',
      name: 'MEDICAMENTOS',
      id:7,
      description:"Recordatorio de la toma de algún medicamento",
      redirecTo: '/activity/7'
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
  id: number;
  description: string;
}
