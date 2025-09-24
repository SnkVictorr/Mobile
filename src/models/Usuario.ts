export default class Usuario {
  // Uso do underline (_) para diferenciar as palavras reservadas do POO das variáveis comuns
  // Atributos
  private _id: number;
  protected _nome: string;
  private _email: string;
  private _senha: string;
  protected _mensagem?: string;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    mensagem: string
  ) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._mensagem = mensagem;
  }

  // Método
  public loginUsuario(): string {
    if (this._email === "victor@email.com" && this._senha === "1234") {
      return "Login Realizado com Sucesso";
    }
    return "Falha no Login";
  }

  // Metodo2: exibirNome
  public exibirPerfil(): string {
    return `Perfil: ${this._nome}`;
  }

  // Metodo3: exibirMsg
  public exibirMsg(): string {
    return `Mensagem: ${this._mensagem}`;
  }
}
