function fn() {
    // {prop:"propiedad"}
    // this.prop=" propiedad"
    // // return"chanchito feliz"
}
 fn.prototype.lala = function funcionDePrototipo() {} 
const r = new fn()
// console.log(r.__proto__);


//fat arrow function 
console.log (this);
//  const fatfn = (this) =>  {//NO TIENEN CONTEXTO DE THIS!!!!!
//      return  
//      "chanchhito feliz"
//     this.prop = "lala"
//  }

// const r1 =  fatfn() 
// console.log (this )

//  console.log(r1)


// RETURN IMPLICITO
const  fnR = () => 2

console.log(fnR());