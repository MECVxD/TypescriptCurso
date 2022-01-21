//Limitar genericos es posible gracias a interfaces
interface Asset<T> {
  x: number;
  y: number;
  generico: T;
}

function generic<T extends Asset<T>>(obj: T) {}

// generic<number>(20);

class Point implements Asset<string> {
  x: number;
  y: number;
  generico: string;
}

class Elements implements Asset<Point> {
  x: number;
  y: number;
  generico: Point;
}

// generic<Point>(new Point());
