import { Component, OnInit } from '@angular/core';
import { S2vService } from 'src/app/services/s2v.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<any>;
  public searchtxt: String;
  public page: number;
  public pageSize: number;

  constructor(private _service: S2vService, private _router: Router) {
    this.pageSize = 10;
  }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      this._router.navigate(["/login"]);

    } else {
      this._service.getUsers().subscribe(res => {
        this.users = res;
      });
      // this.users = [
      //   {
      //     "identifier": "fivem:1281149",
      //     "identity": {
      //       "name": "Jake",
      //       "firstname": "Adam",
      //       "secondname": "Montoya",
      //       "sex": "m",
      //       "dateofbirth": "1994-02-15",
      //       "height": "184"
      //     },
      //     "job": "Shop_20",
      //     "job_grade": 0,
      //     "bank_money": 50000,
      //     "phone_number": "922-6928",
      //     "licenses": [],
      //     "phone_calls": [],
      //     "validated": false,
      //     "house_id": null,
      //     "vehicles": {
      //       "ITG 157": {
      //         "model": "buccaneer",
      //         "plate": "ITG 157"
      //       }
      //     }
      //   }, {
      //     "identifier": "fivem:1281144",
      //     "identity": {
      //       "name": "Marco",
      //       "firstname": "White",
      //       "secondname": "Mont",
      //       "sex": "m",
      //       "dateofbirth": "1988-01-24",
      //       "height": "174"
      //     },
      //     "job": "police",
      //     "job_grade": 0,
      //     "bank_money": 50000,
      //     "phone_number": "501-6186",
      //     "licenses": {
      //       "weapon": "weapon"
      //     },
      //     "phone_calls": [],
      //     "validated": false,
      //     "house_id": null,
      //     "vehicles": {
      //       "GZM 372": {
      //         "model": "cogcabrio",
      //         "plate": "GZM 372"
      //       }
      //     }
      //   }
      // ]
    }
  }

  showDetails(identifier) {
    let id = identifier.substr(identifier.indexOf(":") + 1);
    this._router.navigate(["/user", id]);
  }
}

