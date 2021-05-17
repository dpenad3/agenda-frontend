import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  id:number = Number(this.route.snapshot.paramMap.get('id'));
  
  buttons: Button[]  = [
    {
      icon: 'camera-sharp',
      name: 'IMAGEN',
      redirecTo: '/cam/'+this.id
    },
    {
      icon: 'mic-circle-sharp',
      name: 'AUDIO/VIDEO',
      redirecTo: '/audiov/'+this.id
    },
    {
      icon: 'text-sharp',
      name: 'TEXTO',
      redirecTo: '/text/'+this.id
    },
    
  ]

  constructor(
    protected router:Router, 
    protected route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
  interface Button {
    icon: string;
    name: string;
    redirecTo: string;
  
}
