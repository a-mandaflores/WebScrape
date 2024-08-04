import { IProduct } from "./interface/IProduct";
import { monitorPrices } from "./monitoring/Monitoring";
import { Options } from "./UsersInteractions/Options";
import { Result } from "./UsersInteractions/Result";

async function main() {
  while (true) {
    console.log("------------------------------------------------");
    console.log("Pressione a tecla correspondente");
    console.log("S - Verificar um produto");
    console.log("A - Verificar todos os monitoramentos");
    try {
      const result: IProduct | {} = await Options();
      await Result(result);
    } catch (error) {
      console.error("Erro:", error)
    }
  }

}

const runApp = async () => {
  try {
      await monitorPrices()

      await main()
  } catch (error) {
      console.error("Erro ao executar a aplicação:", error)
  }
}

runApp()
