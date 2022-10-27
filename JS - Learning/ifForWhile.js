// var x = 1;

// function ePar(numero) {return x % 2 ==0;}
// function ePrimo(numero) {return true}

// if (ePar(x)) {
//   console.log("é par")
// } else if (ePrimo(x)) {
//   console.log("é primo")
// } else {
//   console.log("é impar")
// }

// x = 1

// console.log(ePar(x))

// var vetor = [10,20,30,40,50];

// for (var i = 0; i < vetor.length; i++){
//   console.log(i);
//   console.log(vetor[i]);
// }

// for (var valor of vetor) {
//   console.log(valor);
// }

// var json = {
//   name: 'Patrício',
//   profissao: "Desenvolvedor"
// };

// for (var propriedades in json){
//   console.log(json[propriedades])
// }

// let valor = 0;

// do { valor++;
// } while (valor < 10);
// console.log(valor);

// valor = 0

// while (valor < 10) {
//   valor++
//   console.log(valor)
// }
// console.log(valor)



// let a = 0;
// let b = 0;

// repite:
//   while (a < 10) {
//     console.log('Iterando A')
//     a++;
//     while(b < 100) {
//       console.log('Iterando B')
//       b++;
//        if(b % 10 == 0)
//        continue repite;
//     }
//   }
//  console.log(a,b)

let vetor = [10,'c','e',30,50] 

for (var i = 0; i < vetor.length; i++) {
  console.log(`Posição ${i}:`, vetor[i])
}

//  for (var x of vetor) {
//   console.log(x)
//  }