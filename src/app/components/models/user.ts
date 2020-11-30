import { Identity } from './identity';
import { License } from './License';
import { Call } from './Call';
import { Vehicle } from './Vehicle';

export class User {
    constructor(
        public identifier: string,
        public identity: Identity,
        public job: string,
        public job_grade: number,
        public bank_money: number,
        public phone_number: string,
        public licencses: Array<License>,
        public phone_calls: Array<Call>,
        public validated: boolean,
        public house_id: string, // ?
        public vehicles: Array<Vehicle>
        
    ){}
}