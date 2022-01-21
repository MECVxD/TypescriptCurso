function suma(v1: number, v2: number): number {//Al finsl debemos poner el dato que se retornara en caso de que retorne.
  return v1 + v2;
}
console.log(suma(1, 2));

function opcional(nombre?: string) {}//'?:' indica que un argumento es opcional.
//Si no ponemos un tipo a un argumento automaticamente asigna el tipo any
//Si se tiene un valor obligatorio debe ir antes del opcional
//Tambien puede tener un valor por defecto
//En una funcion se debe declarar el tipo de datos que retornara, si no retorna nada puede usar void, tambien existe el retorno "never"
opcional();
opcional("Mauricio");
