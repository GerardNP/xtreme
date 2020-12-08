import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any, args: any): any {
    if (!args) {
      return users;
    }
    // console.log("USUARIOS", users);
    // console.log("ARGUMENTOS", args)
    args = args.trim(); // Eliminamos todos los espacios al incio y al final
    // console.log(arg);
    args = args.split(" "); // Si buscamos más de una palabra las separamos
    // console.log("ARGS", args);
    const results = [];
    for (const user of users) {
      if (args.length == 1) {
        if (user.identity.name == args[0] || user.identity.firstname == args[0] || user.identity.secondname == args[0]) {
          results.push(user);
        }

      } else if (args.length == 2) {
        if (user.identity.name == args[0] && user.identity.firstname == args[1]) {
          results.push(user);
        } else if (user.identity.name == args[0] && user.identity.secondname == args[1]) {
          results.push(user);

        } if (user.identity.firstname == args[0] && user.identity.name == args[1]) {
          results.push(user);
        } else if (user.identity.firstname == args[0] && user.identity.secondname == args[1]) {
          results.push(user);

        } if (user.identity.secondname == args[0] && user.identity.name == args[1]) {
          results.push(user);
        } else if (user.identity.secondname == args[0] && user.identity.firstname == args[1]) {
          results.push(user);
        }

      } else if (args.length == 3) {
        if (user.identity.name == args[0] && user.identity.firstname == args[1] && user.identity.secondname == args[2]) {
          results.push(user);
        } else if (user.identity.name == args[0] && user.identity.secondname == args[1] && user.identity.firstname == args[2]) {
          results.push(user);

        } else if (user.identity.firstname == args[0] && user.identity.name == args[1] && user.identity.secondname == args[2]) {
          results.push(user);
        } else if (user.identity.firstname == args[0] && user.identity.secondname == args[1] && user.identity.name == args[2]) {
          results.push(user);

        } else if (user.identity.secondname == args[0] && user.identity.name == args[1] && user.identity.firstname == args[2]) {
          results.push(user);
        } else if (user.identity.secondname == args[0] && user.identity.firstname == args[1] && user.identity.name == args[2]) {
          results.push(user);
        }
      }
    };
    return results;
  }

}
