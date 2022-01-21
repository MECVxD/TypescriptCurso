//Métodos Accesores Getters y setParameters
//Tienen el proposito de leer o modificar los atributos de un objeto
//La importancia de ancapsular es mantener abstracta la implementacion

// class Video3 {
//   private _title: string;

//   constructor(title: string) {
//     this._title = title;
//   }

//   getTitle(): string {//Obtiene o lee el titulo
//     return this._title;
//   }

//   setTitle(title: string): void {//Modifica el titulo
//     this._title = title;
//   }
// }

// let miVideo3: Video3 = new Video3('Demo');

// miVideo3.title='Nuevo Demo'

// console.log(miVideo3.title)

class User {
  private _name: string;
  private _lastName: string;

  get fullName(): string {
    return `${this._name} ${this._lastName}`;
  }

  set fullName(fullName: string) {
    let words = fullName.split(" ");
    this._name = words[0];
    this._lastName = words[1];
  }
}

let user: User = new User();

user.fullName = "Mauricio Covarrubias";

console.log(user.fullName);
