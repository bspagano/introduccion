// const Rectangulo = class R {
    
// }



//console.log(Rectangulo);
//clases declaradas con class no tienen hoisting
 class Rectangulo {

 }



 //hoisting
 //y esto es cuando  tomamos variable definidas con var 
 //y funciones definidas con function
 //y  las llevas al  comienzo del archivo
//  console.log (cuadrado)
 function cuadrado() {}
//  console.log (cuadrado,Rectangulo);
const r = new Rectangulo()
class chancho {
    propiedad = `mi propiedad`
    #hambre = false
    constructor(estado = `feliz`) {
       this.estado = estado
    }
   async hablar() {
       const res = await fetch('google.com')
        if(1 === 1){

        }
        console.log (`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' :  'satisfecho'}`);
    }
}
//`abc` comillas invertidas
  
const feliz =   new  chancho  ("feliz")
feliz.hablar()
const  triste =   new  chancho  ("triste")
// triste.hablar()
const  nose  =   new  chancho  ()
// nose.hablar()


