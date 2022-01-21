//Enum tipo de dato que toma un cnjunto de valores numericos y asignarle un nombre mas clara y expresiva
//Agregan expresividad al programa pero siguen siendo del tipo de dato asignado
//Si le asignamos un consecutivo a uno de los valores de enum automaticamente los siguientes tomaran los valores consecutivos
enum Tallas {
  Chica = 1,
  Mediana = 2,
  Grande = 3,
}

enum PaymetState {
  Creado = 5,
  Pagado,
  EnDeuda,
}

class Pedido {
  talla: number;
}

let pedido: Pedido = new Pedido();

pedido.talla = Tallas.Chica;

console.log(PaymetState.EnDeuda); //Imprime 7
