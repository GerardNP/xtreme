import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { S2vService } from 'src/app/services/s2v.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("userbox") userbox: ElementRef;
  @ViewChild("passwordbox") passwordbox: ElementRef;

  constructor(private _service: S2vService) { }

  ngOnInit(): void {
  }

  login() {
    let user = this.userbox.nativeElement.value;
    let password = this.passwordbox.nativeElement.value;
    console.log("User: " + user, "Password: " + password);

    this._service.login(user, password).subscribe(res => {
      console.log(res);
      if (res.auth) {
        localStorage.setItem("token", res.token);
      }
    });
  }

}
