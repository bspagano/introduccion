et nombreBarbara = "Barbara"
// let nombreSteven = "Steven" 
 function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase())
 }

 let  barbara = {
    nombre: "Barbara",
    apellido: "Pagano",
    edad:22 
 }

 let  dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad:27
 }


 imprimirNombreEnMayusculas(barbara) 
 imprimirNombreEnMayusculas(dario) 
 imprimirNombreEnMayusculas({nombre:"steven"}) l