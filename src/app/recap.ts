const username: string ='Nombre';
const sum = (a: number, b:number) => {
  return a + b;
}

sum(1, 2);

class Persona {
 /* Edad: number;
  Nombre: string;

  constructor(_Edad: number, _Nombre: string){
    this.Edad= _Edad;
    this.Nombre = _Nombre;
  }*/

  // otra opción se ahorra las lineas de arriba (Tyscript)

  constructor(public Edad: number, public _Nombre: string){ }
}

const Perso = new Persona(33, 'Dianelly');
Perso.Edad;
