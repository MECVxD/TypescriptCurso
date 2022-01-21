//Type Guards, guardianes de tipo, se usan para asegurar el tipo de dato que guardara una variable
//Aprovechar los tipos de union sin perder la certeza que nos dan los tipos de datos
//Suficiente inteligentes para tipos union, tambien nos ayudan a usar metodos que solo pueden usarse con un tipo especifico de dato.
function isNumber(obj: number | string): obj is number {
  return typeof obj === "number";
}

function isString(obj: number | string): obj is string {
  return typeof obj === "string";
}

function printAge(age: number | string) {
  if (isNumber(age)) {
    /*(typeof obj === 'number')*/
    //Estamos seguros de que el objeto es un número
  } else {
    //Estamos seguros de que el objeto es un string
  }
}
