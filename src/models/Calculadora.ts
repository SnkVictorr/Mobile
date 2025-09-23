// Definição da Classe Calculadora
// Conceitos: atributos (num1, num2), construtor e método (somar)

export default class Calculadora {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  somar(): number {
    return this.num1 + this.num2;
  }

  subtrair(): number {
    return this.num1 - this.num2;
  }
  multiplicar(): number {
    return this.num1 * this.num2;
  }
  dividir(): number {
    if (this.num2 === 0) {
      alert("Divisão por zero não é permitida.");
      return 0;
    }
    return this.num1 / this.num2;
  }
}
