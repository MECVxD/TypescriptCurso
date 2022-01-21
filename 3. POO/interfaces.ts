//Interfases y clases abstractas son un concepto exclusivo de los lenguajes de tipado estatico
//Una interfaz es una planilla que debe implementarse
//En teoria no sirven para nada pero ayudan a como debe realizarse de manera correcta una implementacion
//Son como un contrato
interface Asset {
  x;
  y;
  width;
  height: number;
  getCoords(): string;
}

class Hero implements Asset {
  x: number;
  y: number;
  width: number;
  height: number;
  getCoords(): string {
    return "";
  }
}

class Bullet implements Asset {
  x: number;
  y: number;
  width: number;
  height: number;
  getCoords(): string {
    return "";
  }
}

class Enemy implements Asset {
  x: number;
  y: number;
  width: number;
  height: number;
  getCoords(): string {
    return "";
  }
}

class SpaceBullet extends Bullet {
  //Si heredamos de una clase que implementa correctamente la interfaz no es necesario poner todos los atributos de dicha interfaz
}

let spaceBullet: Asset = new SpaceBullet();

class Collisions {
  static check(obj: Asset, object2: Asset) {
    //Se usa any porque no se sabe el tipo del objeto que se enviará
    //Validar que exista forma de comparar los elementos
    //Comparar object con object2
  }
}
