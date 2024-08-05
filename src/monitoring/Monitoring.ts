import { IProduct } from "../interface/IProduct";
import { ScrapWebsite } from "../providers/ScrapWebsite";
import { main } from "../start";
import { editProduct } from "./EditProducts";

export const products: IProduct[] = [];

const verify = async () => {
  if (products.length == 0) {
    console.log("Nenhum produto sendo monitorado");
  }
  for (const product of products) {
    const verifyPrice = await ScrapWebsite(product.URL);
    editProduct(verifyPrice);
    if (verifyPrice.price < product.price) {
      console.log("------------------------------------------------");
      console.log(
        `Produtos mais baixo: ${verifyPrice.name}, valor atual: ${verifyPrice.price}`
      );
      console.log("------------------------------------------------");
      await delay(2000);
    } else {
      console.log("Nenhum produto mudou");
      await delay(2000);
    }
  }
};

export const monitorPrices = async () => {
  const monitorInterval = 60000;

  const monitor = async () => {
    console.clear()
    console.log("------------------------------------------------");
    console.log("Iniciando monitoramento de preços...");
    console.log("------------------------------------------------");
    await verify();
    return;
  };
  
  setTimeout(monitor, monitorInterval);
  monitor();
  return
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


