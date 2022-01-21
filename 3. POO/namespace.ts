//Nombres de espacio, nos permiten agrupar identificadores bajo un mismo Nombre
//Identificadores son clases, interfaces, constantes etc. Simbolos
//Su objetivo es evitar que dos programas usen el mismo nombre en distintas partes
namespace CF {
  //Asi se delcara un namespace y dentro de declaran todos sus componentes
  export class YouTube {} //Se usa exports para que estos componentes sean accecibles desde fuera
  export const url: string = "https://codigofacilito.com";
  const privado: string = "123";
}

let video: CF.YouTube = new CF.YouTube(); //De esta forma se hace la instancia de un namespace
