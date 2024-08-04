import { IProduct } from "../interface/IProduct";
import { products } from "./Monitoring";


const addProduct = async (product: IProduct) => {
    const productExists = products.some((p) => p.URL === product.URL);
  
    if (productExists) {
      console.log("-> Produto já está sendo monitorado");
      await delay(2000);
    console.clear()

    } else {
      products.push(product);
      console.log("-> Produto adicionado com sucesso");
      await delay(2000);
    console.clear()

    }
};

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export { addProduct }