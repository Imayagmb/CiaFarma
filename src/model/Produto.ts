export abstract class Produto {
  //SUPER CLASS

  private _id: number;
  private _nome: string;
  private _preco: number;
  private _quantidade: number;

  constructor(id: number, nome: string, preco: number, quantidade: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
    this._quantidade = quantidade;
  }

  //   ═════════════════════════════
  //          MÉTODO GET
  //   ═════════════════════════════
  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get preco(): number {
    return this._preco;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  //   ═════════════════════════════
  //          MÉTODO SET
  //   ═════════════════════════════
  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public set quantidade(value: number) {
    this._quantidade = value;
  }
}
