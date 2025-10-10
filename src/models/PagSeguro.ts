import Banco from "./Banco";

export default class PagSeguro extends Banco {
  private _credito: Number;
  private _debito: Number;
  constructor(
    saque: number = 1000,
    deposito: number,
    saldo: number,
    credito?: number,
    debito?: number
  ) {
    super(saque, deposito, saldo);
    this._credito = credito;
    this._debito = debito;
  }
  public Pagar(): string {
    if (this._credito) {
      return "Pagou com Crédito";
    }
    if (this._debito) {
      return "Pagou com Débito";
    }
    return "Não foi possível pagar";
  }
}
