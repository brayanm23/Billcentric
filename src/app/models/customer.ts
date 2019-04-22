import { BaseModel } from '../providers/utils/BaseModel';

export class Customer extends BaseModel {
    identifier_customer: string;
    name_customer: string;
    partner_id: number;
    code_customer: string;
    lastName_customer: string;
    phoneNumber_customer: string;
    adress_customer: string;
    birthDate_customer: string;
    dateUpdated_customer: string; // actualizacion de datos
    notify_customer: boolean; // Evento de cobro
    status_customer: number;
    email_customer: string;
}
