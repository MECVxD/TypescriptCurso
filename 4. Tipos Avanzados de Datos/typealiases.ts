//Type Aliases se usa para darle un alias a un tipo de dato
//Es mas util con intersecciones de tipo
//Descriptores mas claro a los tipos de uniones o interseccion, no solo en el retorno de las funciones sino en los datos que recibe
type numero: number;

let edad: numero

edad = 20;

type NumberOrStrings: number | string;

type FuncString = () => string;

function executor(f: FuncString) {

}

executor(()=>'20')