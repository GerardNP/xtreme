import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // public user: User;
  public jotason: object;
  constructor() { 
    this.jotason =
    {
      "identifier": "fivem:124212",
      "identity": {
      "name": "Tururu",
      "firstname": "Testing",
      "secondname": "Dev",
      "sex": "m",
      "dateofbirth": "1994-12-12",
      "height": "182"
      },
      "job": "police",
      "job_grade": 0,
      "bank_money": 49930,
      "phone_number": "611-4121",
      "licenses": {
      "weapon": "weapon"
      },
      "phone_calls": [],
      "validated": false,
      "house_id": null,
        "vehicles": {
        "AVD 469": {
          "model": "asea",
          "plate": "AVD 469"
        }
      }
    };
    console.log(this.jotason);
  }

  ngOnInit(): void {
  }

}
