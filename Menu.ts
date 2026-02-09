import { Input } from "./src/util/Input";

//   ═════════════════════════════
//    MOSTRA O CABEÇALHO EM ASCII
//   ═════════════════════════════
function cabecalho(titulo: string): void {
  console.log(`
╔════════════════════════════════╗
║ ${titulo.padEnd(30)} ║
╚════════════════════════════════╝
`);
}

export function main() {
  let opcao: number;

  while (true) {
    console.clear();

    console.log("\n╔════════════════════════════════╗");
    console.log("║                                ║");
    console.log("║          C I A  F A R M A      ║");
    console.log("║       bem-estar todo dia       ║");
    console.log("║                                ║");
    console.log("╠════════════════════════════════╣");
    console.log("║ [1] Criar Produto              ║");
    console.log("║ [2] Listar Produtos            ║");
    console.log("║ [3] Consultar Produto por ID   ║");
    console.log("║ [4] Atualizar Produto          ║");
    console.log("║ [5] Deletar Produto            ║");
    console.log("║                                ║");
    console.log("║ [9] Sobre                      ║");
    console.log("║ [0] Sair                       ║");
    console.log("╚════════════════════════════════╝");

    opcao = Input.questionInt(">> Escolha uma opcao: ");

    switch (opcao) {
      case 1:
        console.clear();
        cabecalho("CRIAR PRODUTO");
        console.log("Funcionalidade em desenvolvimento...");
        break;

      case 2:
        console.clear();
        cabecalho("LISTAR PRODUTOS");
        console.log("Funcionalidade em desenvolvimento...");
        break;

      case 3:
        console.clear();
        cabecalho("CONSULTAR PRODUTO");
        console.log("Funcionalidade em desenvolvimento...");
        break;

      case 4:
        console.clear();
        cabecalho("ATUALIZAR PRODUTO");
        console.log("Funcionalidade em desenvolvimento...");
        break;

      case 5:
        console.clear();
        cabecalho("DELETAR PRODUTO");
        console.log("Funcionalidade em desenvolvimento...");
        break;

      case 9:
        console.clear();
        cabecalho("SOBRE");
        sobre();
        break;

      case 0:
        console.clear();
        cabecalho("SISTEMA FINALIZADO");
        break;

      default:
        console.clear();
        cabecalho("ERRO!!!");
        console.log("Opcao invalida!");
    }

    if (opcao === 0) {
      break;
    }

    Input.question("\nPressione ENTER para continuar...");
  }
}

function sobre(): void {
  console.log(`
╔══════════════════════════════════════╗
║           C I A  F A R M A           ║
║                                      ║
║  DESENVOLVIDO por: Mayara Monteiro   ║
║  EMAIL: imayagmb@gmail.com           ║
║  LinkedIn & GitHub: Imayagmb         ║
║                                      ║
╚══════════════════════════════════════╝
`);
}

main();
