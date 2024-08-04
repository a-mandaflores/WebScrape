import { IProduct } from "../interface/IProduct";
import { askQuestion } from "./AskQuestion";
import { EOption } from "../enums/EOptions";
import { optionsDestails } from "./OptionsDestails";
import { addProduct } from "../monitoring/AddMonitoring";

async function Result(result: IProduct | {} ) {
      if (result !== undefined) {
        console.clear();

        console.log("------------------------------------------------")
        console.log("Nome: ", (result as IProduct).name)
        console.log("Preço: ", (result as IProduct).price)
        console.log("------------------------------------------------")

        console.log(
          "O produto foi carregado com sucesso. Agora escolha uma das opções..."
        );

        console.log("S - Ver todos os detalhoes do produto ")
        console.log("A - Adicionar o produto no monitoramento ")
        console.log("V - Voltar ")

        const option: EOption
        = (
          await askQuestion("Escolha uma opções: ")
        ).toLowerCase() as EOption
        

        if (option === "s") {
          console.log("------------------------------------------------")
          console.log("Nome: ", (result as IProduct).name)
          console.log("Preço: ", (result as IProduct).price)
          console.log("Descrição: ", (result as IProduct).description)
          console.log("Imagens: ", (result as IProduct).image)

          console.log("------------------------------------------------")

          await optionsDestails(result as IProduct)
            
        } else if (option === "a") {
          await addProduct(result as IProduct)    
    console.clear()

        } else if (option === "v") {
          console.log("Voltando...")
    console.clear()

          return
        }
      }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export { Result }