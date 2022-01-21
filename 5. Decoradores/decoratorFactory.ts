//Para que un decorador acepte argumentos, debemos usar un decoratorFactory
function Auditable(message: string) {
  return function (clsProto: any, methodName: string, descriptor?: any) {
    let originalFunction = clsProto[methodName];
    let decoratedFunction = function () {
      originalFunction();
      console.log(message);
    };

    descriptor.value = decoratedFunction;

    return descriptor;
  };
}

function DecoradorStatic(cls: Function, propertyName: string) {}

class Speaker {
  @Auditable("oldN está obsoleto, hay que usar n") ondN() {
    console.log(10);
  }

  @Auditable("n fue ejectudado") n() {
    console.log(20);
  }
}

let speaker: Speaker = new Speaker();

speaker.ondN();
speaker.n();
