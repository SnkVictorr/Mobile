import Animal from "./Animal";

export default class Baleia extends Animal {
  private _tamCauda: string;
  constructor(
    corOlhos: string,
    tamBoca: string,
    qntPernas: number,
    pelagem: string,
    tamCauda: string
  ) {
    super(corOlhos, tamBoca, qntPernas, pelagem);
    this._tamCauda = tamCauda;
  }

  public fazSom(som: string): string {
    return "Chá!!!" + som;
  }
}
