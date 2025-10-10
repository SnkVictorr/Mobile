export default abstract class Banco {
  private _saque: number;
  private _deposito: number;
  private _saldo: number;

  constructor(saque: number, deposito: number, saldo: number) {
    this._saque = saque;
    this._deposito = deposito;
    this._saldo = saldo;
  }

  public abstract Pagar(): string;
}
