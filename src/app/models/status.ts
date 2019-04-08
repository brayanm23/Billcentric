import { BaseModel } from '../providers/utils/BaseModel';

export class Status extends BaseModel{
    description: string;
    name: string;
    value: number;
    type: string;
}