const  url = `https://jsonplaceholder.typicode.com/users`
// ?user=barbara&apellido=pagano&direccion=maracay:cuando es  con ?  es GET 

// fetch(url), {
//     method: `POST`, // GET,POST,PUT, PATCH,DELETE
//     headers:{
//       "content-type": "aplication/json",
//       "Authorization": "Bearer acadebieseexistiruntokendeautorizacion"
//    },
//    body: JSON.stringify({
//        name:`chanchito feliz`,
//       website:`google.com`
//    })
//  }

//   .then((response)=> response.json())
//     .then((data)=> console.log(data))
//      .then((response)=> console.log(response) )
//          data.forEach(element => 
//            console.log(element)  
//          });
//         console.log(data)
//    })
    
const   fn = async () =>{
   const response =  await fetch(url, {
      method: `POST`, // GET,POST,PUT, PATCH,DELETE
      // si se llegara a utilizar GET  seria  solo  sin body 
      headers:{
         "content-type": "aplication/json",
         "Authorization": "Bearer acadebieseexistiruntokendeautorizacion"
      },
      body: JSON.stringify({
         name:`chanchito feliz`,
         website:`google.com`
      })
   })
   const data = await response.json()
   console.log(data);
}
fn()
