
 // Fetch from Server 
 
 // Example 1
/*

 fetch('Content/Read-ME.txt').then((respone) =>{
     return respone.text()
 }).then((data) => {
     document.write(data)
 })

 
  // Example 2


  fetch('https://jsonplaceholder.typicode.com/users').then((respone) =>{
      return respone.json()
  }).then((data) => {
    console.log(data)

      for (const i in data) {
                var a = document.write(`${data[i].name} - ${data[i].email} - ${data[i].address.city} <br>`)
          }
      
  }).catch((error) => {
      document.write('Can not Fetch Data')
  })

*/
  // Example 3
  fetch('json/Students_data.json').then((respone) =>{
    return respone.json()
}).then((data) => {
  console.log(data)

    for (const i in data) {
              var a = document.write(`${data[i].name} - ${data[i].age} - ${data[i].city} <br>`)
        }
    
}).catch((error) => {
    document.write('Can not Fetch Data')
})

  