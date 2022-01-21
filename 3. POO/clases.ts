class video {
  //Declaracion de clase
  title: string;
  constructor(title: string) {
    //Solo puede existir un constructor por clase y va declarando que es necesario para que una clase funcione correctamente
    this.title = title;
  }

  printTitle() {
    console.log(this.title);
  }

  changeTitle(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

let miVideo = new video("Clases y Objetos en TypeScript"); //Instancia de la clase

miVideo.printTitle(); //Llamada a los métodos de la clase

miVideo.changeTitle("Demo");

console.log(miVideo.getTitle());
