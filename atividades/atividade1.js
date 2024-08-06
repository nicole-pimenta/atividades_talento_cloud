/*Precisamos imprimir um número para cada andar de um hotel de 20 andares. Porém, o dono do hotel é supersticioso e optou por não ter um 13ro andar.
Escreva um código que imprima todos os números exceto o número 13.
Escreva mais dois códigos que resolvam o mesmo problema, mas dessa vez usando os outros dois tipos de laços de repetição aprendidos.

Como desafio, imprima eles em ordem decrescente (20, 19, 18...)*/

for (let i = 1; i <= 20; i++) {
  if (i !== 13) {
    console.log(`Esse é o andar de número ${i}`);
  }
}

//------------------------------------

let j = 1;

while (j <= 20) {
  if (j !== 13) {
    console.log(`Esse é o andar de número ${j}`);
  }
  j++;
}

//------------------------------------

let k = 1;

do {
  if (k !== 13) {
    console.log(`Esse é o andar de número ${k}`);
  }
  k++;
} while (k <= 20);

//------ DESAFIO ------

for (let i = 20; i >= 1; i--) {
  if (i !== 13) {
    console.log(`Esse é o andar de número ${i}`);
  }
}
