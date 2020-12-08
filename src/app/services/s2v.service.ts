import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class S2vService {

    public url: string;
    public token: string;
    public usuarios: Observable<any>;

    constructor(private _http: HttpClient) {
        this.url = Global.urls2vapi;
    }


    login(usr, pwd): Observable<any> {
        let request = "authenticate/";
        return this._http.post(this.url + request, null, {
            headers: {
                password: pwd,
                user: usr
            }
        });
    }

    getUsers(): Observable<any> {
        let request = "users/";
        this.token = localStorage.getItem("token");
        return this._http.get(this.url + request, {
            headers: {
                "access-token": this.token,
                "name": "",
                "firstname": "",
                "secondname": ""
            }
        });
    }

}