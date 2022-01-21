class Video {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  play() {
    console.log("playing");
  }

  stop() {
    console.log("stopped");
  }
}

class YouTubeVideo extends Video {
  constructor(title: string) {
    super(title); //Siempre que en una clase hija se deba sobrescribir el constructor de la clase padre debera llamarse como un método y con los mismos argumentos
    console.log("Inicializando Youtube");
  }
  play() {
    //La palabra reservada super permite llamar a los metodos de la clase padre desde la clase hijo
    //Se puede usar para todos los metodos excepto el constructor
    super.play(); //Llama al método play de la clase padre
    console.log("playing a YouTube Video");
  }
}

let miVideo2: YouTubeVideo = new YouTubeVideo("Clases y Objetos en TypeScript");

miVideo2.play();
