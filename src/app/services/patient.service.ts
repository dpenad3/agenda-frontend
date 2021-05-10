import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class PatientService extends CommonService<Patient> {

    protected urlEndPoint:string ='http://localhost:8000/patients';

    constructor(http: HttpClient) { 
        super(http);
    }
    
}