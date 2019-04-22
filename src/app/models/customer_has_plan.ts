import { BaseModel } from '../providers/utils/BaseModel';

export class Customer_has_plans extends BaseModel {
    plan_id: number;
    customer_id: number;
    creditCardToken_id: number;
    startDate_customerPlan: string;
    endDate_customerPlan: string;
    contractNumber_Plan: string;
    balance_customerPlan: number;
    idCurrent_invoice: number; // factura actual
    lastOkBillingDate: string; // ultimo intento de cobro exitoso
    lastNokBillingDate: string;
    idPlanEnrollmentrenewalPartner: string;
    status_customerPlan: number;
}
