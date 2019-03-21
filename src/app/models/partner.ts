import { BaseModel } from '../providers/utils/BaseModel';

export class Partner extends BaseModel {
    name_partner: string;
    adress_partner: string;
    phone_partner: string;
    status_partner: number;
    parentPartnerId: number;
    city_id: number;
    feeRate_partner: number;
    idNumPriority_partner: number;
    email_partner: string;
    token: string;
    nameOf_status: string;
}