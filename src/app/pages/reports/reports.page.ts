import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  buttons: Button[]  = [
    {
      icon: 'camera-sharp',
      name: 'IMAGEN',
      redirecTo: '/cam'
    },
    {
      icon: 'mic-circle-sharp',
      name: 'AUDIO/VIDEO',
      redirecTo: '/audiov'
    },
    {
      icon: 'text-sharp',
      name: 'TEXTO',
      redirecTo: '/text'
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
