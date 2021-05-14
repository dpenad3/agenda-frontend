import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EducationLevel } from '../models/EducationLevel';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class EducationLevelService extends CommonService<EducationLevel> {

    protected urlEndPoint:string ='https://backendagenda.herokuapp.com/levels';

    constructor(http: HttpClient) { 
        super(http);
    }
    
}