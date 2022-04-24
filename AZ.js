//Contagem
function contagem(){
    var N = prompt("Informe a quantidade de alunos que fizeram a prova:");
    var Nota;
    var Contador = 0;
    var i = 0;

    while (i < N) {
    Nota = prompt("Informe uma Nota");

    if (Nota >= 50) {
    Contador = Contador + 1;
    }

    i = i + 1;
    }
    document.getElementById("MostrarResultados").innerHTML = ("Número de alunos que passaram no exame: " + Contador);
}
//Fibonacci
function Fibonacci(){
var n = prompt("Informe o número da sequência:");

var valorA= 0;
var valorB = 1;
var valorC;
var resultados = (valorA + "," + valorB);

for (i = 3; i <= n; i++)
{
    valorC = valorA + valorB;
	resultados += ("," + valorC);
	valorA = valorB;
	valorB = valorC;
}
document.getElementById("MostrarResultados").innerHTML = (resultados);
}
//Mdc
function Mdc(){
    var ValorDeA = prompt("Digite o primeiro valor:");
    var ValorDeB = prompt("Digite o segundo valor:");

    for(let i = ValorDeA; i>0; i--){
       if (ValorDeA % i == 0 && ValorDeB % i == 0){
        document.getElementById("MostrarResultados").innerHTML = ('O MDC de ' + ValorDeA + ' e de ' + ValorDeB + ' é ' + i);
       }
    }
}
//Ordenação
 function Ordenacao(){
    var numbers = [0,1,3,5,8,17,24,450];
    numbers.sort();
    document.getElementById("MostrarResultados").innerHTML = (numbers);
 }
 //Primo
 function Primo(){
    function NumeroPrimo(num) {
        var numeros = new Array();
        for (var i = 0; i <= num; i++) {
          if (Eprimo(i)){
            numeros.push(i);
          }
        }
        return numeros;
      }
      function Eprimo(num) {
        for(let i = 2; i <num; i++)
          if(num % i === 0) {
              return false
          };
        return num > 1;
      }
      document.getElementById("MostrarResultados").innerHTML = (NumeroPrimo(23));
 }
 //Somatório
 function Somatorio(){
    var n = prompt("Informe a quantidade de números:");
    var num;
    var Soma = 0;
    var i = 0;
    
    while (i < n) {
        num = parseInt(prompt("Informe um número"));
        Soma = Soma + num;
        i = i + 1;
    }
    
    document.getElementById("MostrarResultados").innerHTML = ("A Soma dos " + n + " números é " + Soma);
 }