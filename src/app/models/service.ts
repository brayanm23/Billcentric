import { BaseModel } from '../providers/utils/BaseModel';

export class Service extends BaseModel{
    partnerId: number;
    name_service: string;
    status_service: number;
}