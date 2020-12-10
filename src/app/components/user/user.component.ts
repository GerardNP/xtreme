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
  public jobs: Object;
  public job: Object;
  public trabajo: Object;

  constructor(private _service: S2vService, private _activeR: ActivatedRoute, private _router: Router,) {

    this.jotason =
    {
      "identifier": "fivem:124212",
      "identity": {
        "name": "Tururu",
        "firstname": "Testing",
        "secondname": "Dev",
        "sex": "f",
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
          "plate": "AVD 470"
        },
        "AVD 471": {
          "model": "asea",
          "plate": "AVD 471"
        },
      }
    };

    this.trabajo = {
      "label": "Tendero",
      "name": "Jefe",
      job_grade: {
        "grade": 0,
        "salary": 200,
        "skin_male": [],
        "skin_female": [],
        "label": "Jefe",
        "name": "boss",
        "job_name": "Shop_20"
      }
    }

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

  volver() {
    this._router.navigate(['/']);
  }

  licencias() {
    // si trabajas en local en vez de user es jotason
    var obj = this.user.licenses;
    var str = "";
    Object.entries(obj).forEach(([key, value]) => {
      str += value + ", ";
    });
    str = str.slice(0, str.length - 1);
    str = str.slice(0, -1);
    return str;
  }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      this._router.navigate(["/login"]);

    } else {
      this._activeR.params.subscribe((params: Params) => {

        if (params.id) {
          // this.obtenerUsuario(params.id);
        } else {
          // mostrar mensaje "no se ha encontrado ese usuario, hubo un error"
          // this._router.navigate(['/']);
          console.log("no encuentro ese usuario");
        }

      })
    }
  }

  obtenerUsuario(id) {
    this._service.getUsers().subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        const e = res[i];
        var dni = this.getDNI(e.identifier);
        if (dni == id) {
          console.log(e.job);
          this.user =
            new User(
              e.identifier,
              new Identity(e.identity.name, e.identity.firstname, e.identity.secondname, e.identity.sex, e.identity.dateofbirth, e.identity.height),
              e.job,
              e.job_grade,
              e.bank_money,
              e.phone_number,
              new Licenses(e.licenses),
              new Calls(e.phone_calls),
              e.validated,
              e.house_id,
              new Vehicles(e.vehicles)
            );

          this._service.getJobs().subscribe(res => {
            // SUSTITUIR this.jotason por this.user
            this.jobs = res;
            var object = res[this.user.job].job_grades;
            var claves = Object.keys(object);
            const entries = Object.entries(object);
            console.log(entries);
            for (const [e, propiedades] of entries) {
              console.log("cargo: " + e);
              // PONE QUE DA ERROR EN .grade segun VSCODE, PERO NO DA, ITS A TRAP. FK VSCODE (:)
              console.log(propiedades);

              if (propiedades[e].grade == this.user.job_grade) {
                console.log("este es el trabajo");
                this.job = {
                  "label": res[this.user.job].label,
                  "name": res[this.user.job].name,
                  "job_grade": propiedades
                }
              }

            }
            console.log(this.job);
          }); // getJobs()


        }; // if
      } // for
    }, error => {
      // carga los datos de local
      console.log("No carga la peticion");
    }); // getUsers

  } // funcion obtenerUsuario(id)
}
