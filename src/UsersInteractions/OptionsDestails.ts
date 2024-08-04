import { EOption } from "../enums/EOptions";
import { IProduct } from "../interface/IProduct";
import { addProduct } from "../monitoring/AddMonitoring";
import { askQuestion } from "./AskQuestion";


async function optionsDestails(product: IProduct) {
    console.log("A - Adicionar o produto no monitoramento ")
    console.log("V - Voltar ")
    const option: EOption
    = (
    await askQuestion("Escolha uma opções: ")
    ).toLowerCase() as EOption
    if (option === "a") {
        await addProduct(product)        
    } else if (option === "v") {
        console.log("Voltando...")
    console.clear()

        return
    }
}

export { optionsDestails }


