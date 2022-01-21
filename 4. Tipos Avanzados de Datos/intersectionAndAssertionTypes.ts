//Intersection types, pueden usarse clases o interfaces
class User {
  name: string;
}

class Admin {
  permissions: number;
  getPermission() {}
}

let user: User & Admin; //El tipo de dato es User&Admin

user.name = "Mauricio";
user.permissions = 5;
user.getPermission();

//Type assertions, no cambian el objeto, solo el tipo que el compilador habia dado

// user = new User();

user = new User() as User & Admin;

interface AJAXSettings {
  url: string;
}

let options = {} as AJAXSettings;
options.url = "https://codigofacilito.com/";
