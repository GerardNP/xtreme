import { License } from './License';

export class Licenses {

    private licenses;

    constructor(_licenses: Array<License>){
        if(_licenses.length == 0){
            this.licenses = [new License("No tiene licencia")];
        } else {
            this.licenses = _licenses;
        }
    }
    
}