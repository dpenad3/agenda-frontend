import { Time } from '@angular/common';
import { ActivityType } from './ActivityType';
import { Generic } from './generic';
import { Patient } from './patient';

export class ActivitiesPatient implements Generic{
    id: number;
    name: string;
    activity_type: ActivityType;
    text: string;
    patient: Patient;
    date: Date;
    time: Time;
    audio: File;
    image: File;
}