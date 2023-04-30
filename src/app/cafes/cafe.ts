//import { Editorial } from "../editorial/editorial";


export class Cafe {
 id: number;
 nombre: string;
 tipo: string;
 religion: string;
 sabor: string;
 altura: number;
 imagen: string;

 constructor(
   id: number,
   nombre: string,
   tipo: string,
   religion: string,
   sabor: string,
   altura: number,
   imagen: string,

 ) {
   this.id = id;
   this.nombre = nombre;
  this.tipo= tipo;
  this.religion=religion;
  this.sabor=sabor;
  this.altura=altura;
  this.imagen= imagen;
 }
}
/* archivo src/app/book/book.ts */
