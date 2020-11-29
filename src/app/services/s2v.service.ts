import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class S2vService {

    public url: String;

    constructor(private _http: HttpClient) {
        this.url = Global.urls2vapi;
    }

    login(usr, pwd): Observable<any> {
        let request = "authenticate/";
        console.log("USR: " + usr, "PWD: " + pwd);
        return this._http.post(this.url + request, null, {
            headers: {
                password: pwd,
                user: usr
            }
        });
    }

}