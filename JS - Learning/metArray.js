let ar = [-5,10,15,20,-3,89];

for (let x = 0; x < ar.length ; x++) {
  
  if (ar[x] > 0) {
    console.log(`O elemento "${ar[x]}" é maior que 0`)
  } else {
    console.log(`O elemento "${ar[x]}" é menor que 0`)
    delete(ar[x])
  }
}

ar = ar.filter( function(i) {return i;})
console.log(ar)