import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-act1',
  templateUrl: './type-act1.page.html',
  styleUrls: ['./type-act1.page.scss'],
})
export class TypeAct1Page implements OnInit {

  buttons: Button[]  = [
    {
      icon: 'game-controller-outline',
      name: 'JUEGOS',
      redirecTo: '/reports'
    },
    {
      icon: 'library-outline',
      name: 'INTELECTUAL',
      redirecTo: '/reports'
    },
    {
      icon: 'barbell-outline',
      name: 'EJERCICIO',
      redirecTo: '/reports'
    },
    {
      icon: 'people-circle-outline',
      name: 'FAMILIAR',
      redirecTo: '/reports'
    },
    {
      icon: 'bandage-outline',
      name: 'AUTOCUIDADO',
      redirecTo: '/reports'
    },
    {
      icon: 'medical-outline',
      name: 'MEDICAMENTOS',
      redirecTo: '/reports'
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
