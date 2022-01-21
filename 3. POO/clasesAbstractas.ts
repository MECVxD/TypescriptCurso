//Clases Abstractas son como interfaces pero con cierto codido
//Las clases abstractas no se pueden instanciar es decir no se pueden generar nuevas clases
//Pueden contener metodos abstractos mismos que no pueden contener informacion y deben ser implementados por las subclases

abstract class Asset1 {
  x;
  y;
  width;
  height: number;
  getCoords(): string {
    return `${this.x}, ${this.y}`;
  }

  abstract move(speed: number): boolean;
}

class Hero1 extends Asset1 {
  //Usamos herencia por lo que perdemos la posibilidad de heredar de otras clases
  move(speed: number) {
    return true;
  }
}
