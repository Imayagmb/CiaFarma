import { Produto } from "./Produto";

export class Cosmetico extends Produto {
  private fragancia: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    fragancia: string,
  ) {
    super(id, nome, tipo, preco);
    this.fragancia = fragancia;
  }

  public getFragancia(): string {
    return this.fragancia;
  }

  public setFragancia(fragancia: string): void {
    this.fragancia = fragancia;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Fragrância: ${this.fragancia}`);
  }
}
