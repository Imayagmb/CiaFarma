import { Produto } from "./Produto";

export class Medicamento extends Produto {

    private generico: string;

    constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    generico: string
  ) {
    super(id, nome, tipo, preco);
    this.generico = generico;
  }

  public getGenerico(): string {
    return this.generico;
  }

  public setGenerico(generico: string): void {
    this.generico = generico;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Genérico: ${this.generico}`);
  }
}