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
    }
  }

  showDetails(identifier) {
    let id = identifier.substr(identifier.indexOf(":") + 1);
    this._router.navigate(["/user", id]);
  }
}

