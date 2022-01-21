//Se diferencian de los decoradores de propiedades porque reciben 3 argumentos
//primero el prototipo, el segundo es el nombre del metodo y el 3ro el descriptor de propiedades

//Tambien existen los decoradores para parametros con tres argumentos el prototipo, el nombre del parametro y el consecutivo del parametro
function Auditable(clsProto: any, methodName: string, descriptor?: any) {
  let originalFunction = clsProto[methodName];
  let decoratedFunction = function () {
    originalFunction();
    console.log(`La función ${methodName} fue ejecutada`);
  };

  descriptor.value = decoratedFunction;

  return descriptor;
}

function DecoradorStatic(cls: Function, propertyName: string) {}

class Speaker {
  @Auditable n() {
    console.log(20);
  }
}

let speaker: Speaker = new Speaker();

speaker.n();
