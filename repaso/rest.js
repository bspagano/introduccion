const rest = (a,b,...argumentos)  => {
    console.log(a,b);
    console.log(argumentos);
    
}
// rest(...argumentos:any[]): void
// rest(1,2,3)  

 const obj ={
    a: 1, b:2, c: 1, d: 1
 }
// const { a, b, ...restob } = obj 
// console.log(a,b restob);n
const  arr = [1,2,3,4,5]
const [a,b,...r] = arr
// console.log(a,b,r)

const useState = () => [`valor`,()  =>{}]

const [valor, setValor]=(useState()
console.log( valor,seState);