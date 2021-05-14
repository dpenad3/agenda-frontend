import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  submitForm() {
    Swal.fire('Login correcto','success');
    this.router.navigate(['/options']);

  }

  constructor(
    public formBuilder: FormBuilder, 
    protected router:Router, 
    protected route:ActivatedRoute
  ) { }

  vij:string = '../assets/images/logo.PNG';
  ngOnInit() {
  }

  navRegistro(){
    this.router.navigate(['/register']);
  }
}
