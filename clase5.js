let nombreBarbara = "Barbara"
// let nombreSteven = "Steven" 
 function imprimirNombreEnMayusculas(persona){
     //let nombre =persona.nombre
     let  {nombre}= persona
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
  edad: 27
 }


 imprimirNombreEnMayusculas(barbara) 
//  imprimirNombreEnMayusculas(dario) 
//  imprimirNombreEnMayusculas({nombre:"steven"}) 

function imprimirNombreYEdad()  {
    // hola me llamo barbara  y tengo 22  años 
}

// const {nombre, apellido, edad} = barbara
// console.log(`${nombre} ${apellido} ${edad}`)


// const {nombre:  nombreDario, apellido: apellidoDario, edad: edadDario} = dario
// console.log(`${nombreDario} ${apellidoDario} ${edadDario}`)

function cumpleanos(persona) {
    persona.edad += 1
}
cumpleanos(barbara)
console.log(barbara)