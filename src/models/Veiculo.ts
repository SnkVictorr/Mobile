export default class Veiculo {
  private _id: number;
  private _marca: string;
  private _modelo: string;

  constructor(_id: number, _marca: string, _modelo: string) {
    this._id = _id;
    this._marca = _marca;
    this._modelo = _modelo;
  }
  acelerar(): string {
    return "Acelerando o veículo...";
  }
}
