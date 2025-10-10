import Banco from "./Banco";

export default class Nubank extends Banco {
  private _pixCredito: Number;
  private _criptomoeda: Number;
  constructor(
    saque: number,
    deposito: number,
    saldo: number,
    criptomoeda?: number,
    pixCredito?: number
  ) {
    super(saque, deposito, saldo);
    this._pixCredito = pixCredito || 0;
    this._criptomoeda = criptomoeda || 0;
  }

  public Pagar(): string {
    if (this._pixCredito) {
      return "Pagou com Pix";
    }
    if (this._criptomoeda) {
      return "Pagou com Criptomoeda";
    }
    return "Não foi possível pagar";
  }
}
