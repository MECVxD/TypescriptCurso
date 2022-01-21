//any es una mala practica
//Genericos tipo flexible que permite trabajar con varios tipos de datos sin perder los beneficios del tipado estatico
//Son generalmente utiles con cadenas.
function genericReceptor<T>(obj: T): T {
  return obj;
}

let cadena = genericReceptor<string>("Mauricio");

//genericReceptor<string>(20) //Marca Error

let numero = genericReceptor<number>(20);

// numero = 'Hola'

function printAll<T>(arr: T[]) {
  console.log(arr.length);
}

printAll<string>(["Hola", "Mundo"]);
printAll<number>([20, 25, 12]);
printAll<boolean>([true]);

class Printer<T> {
  printAll(arr: T[]) {
    console.log(arr.length);
  }
}

let printer: Printer<number> = new Printer();

printer.printAll([1, 2]);
