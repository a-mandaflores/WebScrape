import { EOption } from "../enums/EOptions";
import { askQuestion } from "../UsersInteractions/AskQuestion";
import { products } from "./Monitoring";

const verifyAll = async () => {
  if (products.length === 0) {
    console.log("-> Monitoramento vazio");
    await delay(2000);
    console.clear()

  } else {
    console.clear()
    console.log("------------------------------------------------");
    for (const product of products) {

      console.log(`${product.name} | ${product.price}`);
      console.log("------------------------------------------------");
    }

    console.log("S - Ver todos os detalhoes dos produtos ");
    console.log("V - Voltar ");

    const answer = await askQuestion("Escolha a opção: ");

    if (answer === "s") {
      for (const product of products) {
        console.log("Nome: ", product.name);
        console.log("Preço: ", product.price);
        console.log("Descrição: ", product.description);
        console.log("Imagens: ", product.image);

        console.log("------------------------------------------------");
      }

      const option: EOption = (
        await askQuestion("V - Voltar ")
      ).toLowerCase() as EOption;

      if (option === "v") {
        console.log("Voltando...");
    console.clear()

        return;

      }
    } else if (answer.toLowerCase() === "v") {
      console.log("-> Voltando...");
    console.clear()

      return;
    }
    await delay(2000);
  }
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { verifyAll };
