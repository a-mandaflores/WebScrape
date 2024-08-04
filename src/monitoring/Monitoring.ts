import { IProduct } from "../interface/IProduct";
import { ScrapWebsite } from "../providers/ScrapWebsite";
import { editProduct } from "./EditProducts";

const products: IProduct[] = [];

const verify = async () => {
  if (products.length == 0) {
    console.log("Nenhum produto sendo monitorado");

    return;
  }
  console.log("------------------------------------------------");
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

const monitorPrices = async () => {
  const monitorInterval = 60000;

  const monitor = async () => {
    console.clear()
    console.log("------------------------------------------------");
    console.log("Iniciando monitoramento de preços...");
    console.log("------------------------------------------------");
    await verify();
    setTimeout(monitor, monitorInterval);
  };

  monitor();
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export { products, verify, monitorPrices };
