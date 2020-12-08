import { AfterContentChecked, Component, OnInit } from '@angular/core';

// Modelos
import { User } from '../models/user';
import { Identity } from '../models/identity';
import { Licenses } from '../models/licenses';
import { Calls } from '../models/calls';
import { Vehicles } from '../models/vehicles';


import { ActivatedRoute, Params } from '@angular/router';
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
  public hola: Array<Object>;

  constructor(private _service: S2vService, private _activeR: ActivatedRoute, private _router: Router,) {

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
        "gun": "gun",
        "car": "car",
        "motorbike": "motorbike"
      },
      "phone_calls": ["611-4131", "621-4141", "654-4541"],
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
        },
        "AVD 471": {
          "model": "asea",
          "plate": "AVD 469"
        },
      }
    };
    /*
    this.jotason =
    {
      "identifier": "fivem:124212",
      "identity": {
        "name": "",
        "firstname": "",
        "secondname": "",
        "sex": "",
        "dateofbirth": "",
        "height": ""
      },
      "job": "",
      "job_grade": "",
      "bank_money": "",
      "phone_number": "",
      "licenses": {
      },
      "phone_calls": [],
      "validated": false,
      "house_id": null,
      "vehicles": {
      }
    };
    */
  }

  pintarGenero(genero) {
    if (genero == "m") {
      return "Masculino";
    } else if (genero == "f") {
      return "Femenino";
    } else {
      return "Sin género";
    }
  }

  dateToEsLocale(date) {
    date = date.split("-");
    return date[2] + "/" + date[1] + "/" + date[0];
  }

  getDNI(dni) {
    dni = dni.split("fivem:");
    return dni[1];
  }

  ngOnInit(): void {
    this._activeR.params.subscribe((params: Params) => {

      if (params.id) {
        this.obtenerUsuario(params.id);
      } else {
        // mostrar mensaje "no se ha encontrado ese usuario, hubo un error"
        // this._router.navigate(['/']);
        console.log("no encuentro ese usuario");
      }

    })
  }

  obtenerUsuario(id) {
    this._service.getUsers().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        const e = res[i];
        var dni = this.getDNI(e.identifier);
        if (dni == id) {
          //this.jotason = e;
          this.user =
            new User(
              e.identifier,
              new Identity(e.identity.name, e.identity.firstname, e.identity.secondname, e.identity.sex, e.identity.dateofbirth, e.identity.height),
              e.identity.job,
              e.identity.job_grade,
              e.identity.bank_money,
              e.identity.phone_number,
              new Licenses(e.licenses),
              new Calls(e.phone_calls),
              e.validated,
              e.house_id,
              new Vehicles(e.vehicles)
            );
          console.log(this.user);
        };
      }
    });
  } // funcion obtenerUsuario(id)
}
