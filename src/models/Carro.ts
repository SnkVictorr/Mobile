import Veiculo from "./Veiculo";

// extends: Herança
export default class Carro extends Veiculo {
  // Propriedades
  private _numeroPortas: number;
  // Construtor
  constructor(id: number, marca: string, modelo: string, numeroPortas: number) {
    super(id, marca, modelo);
    this._numeroPortas = numeroPortas;
  }
  // Métodos

  get numeroPortas(): number {
    return this._numeroPortas;
  }
  set numeroPortas(value: number) {
    this._numeroPortas = value;
  }

  buzinar(): string {
    return "Biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
  }
}
