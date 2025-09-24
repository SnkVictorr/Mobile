export default abstract class Animal {
  private _corOlhos: string;
  private _tamBoca: string;
  private _qtdPernas: number;
  private _pelagem: string;

  constructor(
    corOlhos: string,
    tamBoca: string,
    qntPernas: number,
    pelagem: string
  ) {
    this._corOlhos = corOlhos;
    this._tamBoca = tamBoca;
    this._qtdPernas = qntPernas;
    this._pelagem = pelagem;
  }

  public fazSom(som: string): void {
    
  }
}
