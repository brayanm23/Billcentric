import { BaseModel } from '../providers/utils/BaseModel';

export class Plan extends BaseModel{
    service_id: number;
    idPlan_partner: string;
    name_plan: string;
    feeCost_plan: number;
    enrollmentCost_plan: number;
    frecuency_id: number;
    status_plan: number; /// 1:Activo - 0:Inactivo
    taxRate_plan: number;
    freezeCostPlan: number;
}