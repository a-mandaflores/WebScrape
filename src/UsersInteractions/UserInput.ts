import { askQuestion } from "./AskQuestion";
import { ScrapWebsite } from "../providers/ScrapWebsite";
import { EOption } from "../enums/EOptions";
import { verifyAll } from "../monitoring/VerifyAll";

async function UserInput(key: EOption) {
    switch (key) {
      case "s":
        console.clear();
        console.log("------------------------------------------------")
        const url = await askQuestion("Qual a URL do produto para verificação: ")
        try {
          const result = await ScrapWebsite(url)
          return result
        } catch (error) {
          console.error("Erro ao verificar o produto:", error)
          return undefined
        }

      case "a":
        await verifyAll()
    console.clear()
        
      default:
        return undefined
    }
}

export { UserInput }
