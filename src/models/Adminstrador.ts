import Usuario from "./Usuario";

class Administrador extends Usuario {
  private _cargo: string;

  constructor(
    _id: number,
    _nome: string,
    _email: string,
    _senha: string,
    _mensagem: string,
    _cargo: string
  ) {
    super(_id, _nome, _email, _senha, _mensagem);
    this._cargo = _cargo;
  }

  // Polimorfismo: utilizar os mesmos métodos de forma diferente
  public exibirMsg(): string {
    return `Seja Bem Vindo: ${this._nome} com ${this._cargo}`;
  }
}

export default Administrador;
