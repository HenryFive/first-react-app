export function getList() {
    return fetch('https://fakestoreapi.com/products?limit=10')
      .then(data => data.json())
  }
  
  export function setItem(item) {
   return fetch('https://fakestoreapi.com/products?limit=10', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
  }