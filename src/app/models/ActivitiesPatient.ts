import { ActivityType } from './ActivityType';
import { Generic } from './generic';
import { Patient } from './patient';

export class ActivitiesPatient implements Generic{
    id: number;
    name: string;
    activity_type: ActivityType;
    report: string;
    patient: Patient;
}