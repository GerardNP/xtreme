import { Component, OnInit } from '@angular/core';
import { S2vService } from 'src/app/services/s2v.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private _service: S2vService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      this._router.navigate(["/login"]);

    } else {
      this._service.getUsers().subscribe(console.log);
    }
  }

}
