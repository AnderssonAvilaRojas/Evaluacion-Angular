//import { Editorial } from "../editorial/editorial";


export class Cafes {
 id: number;
 name: string;
 tipo: string;
 religion: string;
 sabor: string;
 altura: number;
 imagen: string;

 constructor(
   id: number,
   name: string,
   tipo: string,
   religion: string,
   sabor: string,
   altura: number,
   imagen: string,

 ) {
   this.id = id;
   this.name = name;
  this.tipo= tipo;
  this.religion=religion;
  this.sabor=sabor;
  this.altura=altura;
  this.imagen= imagen;
 }
}
/* archivo src/app/book/book.ts */
