function maiorIdade() {
  var ano = document.getElementById("ano");
  console.log(ano.value);
  var idade = 2018 - ano;
  console.log(idade);

////////////////////pegar ano do sistema
var DataSistema = new Date();
var anoSistema = DataSistema.getFullYear();
console.log(anoSistema);
idade = anoSistema - ano.value;
console.log("Voce Possui: "+idade);


/**
  if (idade>18) {
    alert("Maior de idade!");
  }else{
    alert("Menor de idade!");
  }
**/
}
