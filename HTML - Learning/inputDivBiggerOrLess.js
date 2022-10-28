
function onClick() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);

  let resultado = (valor1) + (valor2)

  if (resultado > 10){
   document.getElementById("resultadoInput").innerHTML=`O resultado é "${resultado}",ou seja, maior que 10`;
} else if (resultado <10){
  document.getElementById("resultadoInput").innerHTML= `O resultado é "${resultado}",ou seja, menor que 10`;
} else {
  document.getElementById("resultadoInput").innerHTML= `O resultado é igual a ${resultado} `;
}
  
}
  


