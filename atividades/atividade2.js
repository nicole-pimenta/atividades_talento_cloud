/*Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.*/

function calculadora(num1, num2, operacao) {
  if (operacao === 'Soma') {
    return num1 + num2;
  }
  if (operacao === 'Subtração') {
    return num1 - num2;
  }
  if (operacao === 'Multiplicação') {
    return num1 * num2;
  }
  if (operacao === 'Divisão') {
    return num1 / num2;
  }
  return 0;
}

calculadora(7, 2, 'Soma'); // 9
