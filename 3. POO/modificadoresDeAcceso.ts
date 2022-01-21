//Encapsulacion, se trata de mantener la informacion publica en lo minimo posible
class Video2 {
  //Todas las propiedades que no tienen un modificador de acceso son publicas por defecto
  public title: string;
  private title2: string; //No pueden usarse en subclases
  protected title3: string; //Pueden usarse en subclases
  constructor(title: string) {
    this.title = title;
  }
}

class Youtube extends Video2 {
  printTile() {
    console.log(this.title2);
    console.log(this.title3);
  }
}

let miVideo3: Video2 = new Video2("Demo");

console.log(miVideo3.title);
