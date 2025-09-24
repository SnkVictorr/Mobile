import Animal from "./Animal";

export default class Besouro extends Animal {


  constructor(
    corOlhos: string,
    tamBoca: string,
    qntPernas: number,
    pelagem: string
  ) {
    super(corOlhos, tamBoca, qntPernas, pelagem);
  }

  public fazSom(som: string): string {
    return "ahum" + som;
  }
}
