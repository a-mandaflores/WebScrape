import { IProduct } from "../interface/IProduct";
import { products } from "./Monitoring";

const editProduct = async (url: IProduct) => {
    const product = products.find((p) => {p.URL === url.URL})
    if (product) {
        product.price = url.price;
    } 
}

export { editProduct }