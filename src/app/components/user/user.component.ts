import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Vehicle } from '../models/Vehicle';

import { S2vService } from 'src/app/services/s2v.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // public user: User;
  public jotason: Object;
  public o: Object;
  public user: User;
  
  constructor(private _service: S2vService, private _router: Router,) {
    
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
      "job_grade": "0",
      "bank_money": "49930",
      "phone_number": "611-4121",
      "licenses": {
        "weapon": "weapon",
      },
      "phone_calls": [],
      "validated": false,
      "house_id": null,
      "vehicles": {
        "AVD 469": {
          "model": "asea",
          "plate": "AVD 469"
        },
        "AVD 470": {
          "model": "asea",
          "plate": "AVD 469"
        }
      }
  };
  this.o =
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
      "job_grade": "0",
      "bank_money": "49930",
      "phone_number": "611-4121",
      "licenses": {
        "weapon": "weapon",
      },
      "phone_calls": [],
      "validated": false,
      "house_id": null,
      "vehicles": {
        "AVD 469": {
          "model": "asea",
          "plate": "AVD 469"
        },
        "AVD 470": {
          "model": "asea",
          "plate": "AVD 469"
        }
      }
      
  };

  //this.user = new User(this.o["identifier"], new Identity(this.o["identity"].name, this.o.identity.firstname), o.identity.job, o.identity.job_grade, o.identity.bank_money, o.identity.phone_number, licencses: Array<License>, phone_calls: Array<Call>, validated, house_id, vehicles: Array<Vehicle>);

  }
  /*
  buscarUsuario(id){
    this._service.getUser(iddept).subscribe(response => {
      this.departamento = response;
    });
  }
  */

  ngOnInit(): void {
    // this._service.getUsers().subscribe(console.log);
    /*
    this._activateRoute.params.subscribe((params: Params) => {
      this.buscarDepartamento(params.iddepartamento);
    });
    */
  }

  /*
  function extraerDNI(string cadena)() => {
    return cadena.split("fivem:");
  }
  */

}
