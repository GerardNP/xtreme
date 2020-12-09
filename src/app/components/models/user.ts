import { Identity } from './identity';
import { Licenses } from './licenses';
import { Calls } from './calls';
import { Vehicles } from './vehicles';

export class User {
    constructor(
        public identifier: string,
        public identity: Identity,
        public job: string,
        public job_grade: number,
        public bank_money: number,
        public phone_number: string,
        public licencses: Licenses,
        public phone_calls: Calls,
        public validated: boolean,
        public house_id: string, // ?
        public vehicles: Vehicles
    ){}
}