import Usuario from "./Usuario";

class Administrador extends Usuario {
  private nivelAcesso: string;

  constructor(
    _id: number,
    nome: string,
    email: string,
    senha: string,
    mensagem: string,
    nivelAcesso: string
  ) {
    super(_id, nome, email, senha, mensagem);
    this.nivelAcesso = nivelAcesso;
  }

  public exibirNivelAcesso(): string {
    return `Nível de Acesso: ${this.nivelAcesso}`;
  }
}

export default Administrador;
