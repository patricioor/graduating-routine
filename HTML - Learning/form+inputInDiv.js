function onClick() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let email = document.getElementById("email").value;

  document.getElementById("nomeInput").innerHTML=nome;
  document.getElementById("sobrenomeInput").innerHTML=sobrenome;
  document.getElementById("emailInput").innerHTML=email;
}