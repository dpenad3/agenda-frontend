import { EducationLevel } from './EducationLevel';
import { Generic } from './generic';

export class Patient implements Generic{
    id: number;
    name: string;
    birth_date: Date;
    ubication: string;
    cellphone: string;
    email: string;
    eps: string;
    rh: string;
    password: string;
    education_level: EducationLevel;
}