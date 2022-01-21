//Se diferencian de los decoradores de clase porque envian dos argumentos a la funcion decorada
//
function Decorador(clsProto: any, propertyName: string) {
  console.log("Soy un decorador en ejecución");
  clsProto.className = clsProto.constructor.name;
  console.log(propertyName);
}

function DecoradorStatic(cls: Function, propertyName: string) {}

class Speaker {
  @Decorador
  numero: number;

  @DecoradorStatic
  static otroPar: string;
}

let speaker: Speaker = new Speaker();

console.log((speaker as any).className);
