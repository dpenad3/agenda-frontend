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
      name: 'JUEGOS',
      redirecTo: '/activity/2'
    },
    {
      icon: 'library-outline',
      name: 'INTELECTUAL',
      redirecTo: '/activity/1'
    },
    {
      icon: 'barbell-outline',
      name: 'EJERCICIO',
      redirecTo: '/activity/3'
    },
    {
      icon: 'people-circle-outline',
      name: 'FAMILIAR',
      redirecTo: '/activity/4'
    },
    {
      icon: 'bandage-outline',
      name: 'AUTOCUIDADO',
      redirecTo: '/activity/5'
    },
    {
      icon: 'medical-outline',
      name: 'MEDICAMENTOS',
      redirecTo: '/activity/6'
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
