import { Call } from './Call';

export class Calls { 
    private calls;
    constructor(_calls: Array<Call>){
        if(_calls.length == 0){
            this.calls = [new Call("No tiene llamadas")];
        } else {
            this.calls = _calls;
        }
    }
}