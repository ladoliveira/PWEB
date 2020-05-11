function maior(){

var numeros = new Array(3);
for(i=0; i<3; i++){
   numeros[i] = prompt("Digite o "+(i+1)+"º número!") ;
}
return alert("O maior numero é: "+Math.max(numeros[0],numeros[1],numeros[2]));
}


