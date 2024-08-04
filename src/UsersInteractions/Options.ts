import { askQuestion } from "./AskQuestion";
import { UserInput } from "./UserInput";
import { EOption  } from "../enums/EOptions";

async function Options(): Promise<{} | undefined> {
    const option: EOption = (
      await askQuestion("Escolha uma opção: ")
    ).toLowerCase() as EOption;
  
    if (option === "s" || option === "a") {
      const result = await UserInput(option)
      return result;
    } 
}

export { Options }