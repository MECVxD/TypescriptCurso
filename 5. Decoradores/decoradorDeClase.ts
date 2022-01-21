//Funciones que se mandan a llamar con ciertos argumentos especificos
//Se llama una linea antes de la clase o en la misma linea
function Decorador(cls: Function) {
  console.log("Soy un decorador en ejecución");
  cls.prototype.className = cls.name;
}

@Decorador
class Speaker {}

let speaker: Speaker = new Speaker();

console.log((speaker as any).className);
