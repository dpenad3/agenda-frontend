import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivitiesPatient } from '../models/ActivitiesPatient';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesPatientService extends CommonService<ActivitiesPatient> {

    protected urlEndPoint:string ='http://localhost:8000/activitiespatient/';

    constructor(http: HttpClient) { 
        super(http);
    }
    
}