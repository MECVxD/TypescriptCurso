//Atributos estaticos
//1 La informacion le pertenece a la clase y no al objectStore
//2 Solo se necesita una copia de esa variable y no más
//3 Se utiliza llamando a la clase y no al this
//Tambien se pueden hacer metodos estaticos lo cual permite llamar a los metodos de la clase sin instanciarla
//Se usan cuando los metodos no necesitan un estado interno.

class Requestor {
  //url: string;
  static url: string = "https://codigofacilito.com"; //Esta propiedad le pertenece solamente a la clase

  getCourses() {
    console.log(`${Requestor.url}/cursos`); //Solo se creará una copia de la variable para todas las clases que implementen la clase padre
  }
  getArticles() {
    console.log(`${Requestor.url}/articles`);
  }

  // constructor() {
  //   this.url = 'https://codigofacilito.com'
  // }

  // getCourses() {
  //   console.log(`${this.url}/cursos`)
  // }
  // getArticles() {
  //   console.log(`${this.url}/articles`)
  // }
}
