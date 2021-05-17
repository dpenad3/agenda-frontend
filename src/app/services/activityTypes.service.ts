import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityType } from '../models/ActivityType';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class ActivityTypeService extends CommonService<ActivityType> {

    protected urlEndPoint:string ='https://backendagenda.herokuapp.com/activitiestype';

    constructor(http: HttpClient) { 
        super(http);
    }
    
}