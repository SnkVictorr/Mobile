import Banco from "./Banco";

export default class PagSeguro extends Banco {
  private _Credito: Number;
  private _Debito: Number;
  constructor(saque: number, deposito: number, saldo: number) {
    super(saque, deposito, saldo);
    this._Credito = 0;
    this._Debito = 0;
  }

  
}
