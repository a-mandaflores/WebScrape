import { chromium } from "playwright";
import { IProduct, IImagens } from "../interface/IProduct";

async function ScrapWebsite(url: string) {
  const browser = await chromium.launch();
  const product: IProduct = {
    URL: url,
    name: "",
    price: "",
    description: "",
    image: [],
  };

  try {
    console.log(" -> Iniciando browser");
    const page = await browser.newPage();
    await page.goto(url);

    console.log(" -> Página carregada, verificando elementos...");

    const priceElements = await page.$$("span.saleInCents-value");
    const nameElements = await page.$$("h1.product-name");
    const descriptionElements = await page.$$("p.features--description");

    console.log(" -> Iniciando scrape");

    const imageContainer = await page.$$(".image-presenter--showcase");
    for (const container of imageContainer) {
      const images = await container.$$("img");
      for (const image of images) {
        const src = await image.getAttribute("src");
        if (src) product.image.push({ url: src});
      }
    }

    if (
      priceElements.length > 0 &&
      nameElements.length > 0 &&
      descriptionElements.length > 0
    ) {
      const priceElement = priceElements[0];
      const nameElement = nameElements[0];
      const descriptionElement = descriptionElements[0];

      product.price = await page.evaluate(
        (el) => el.textContent?.trim() || "",
        priceElement
      );
      product.name = await page.evaluate(
        (el) => el.textContent?.trim() || "",
        nameElement
      );
      product.description = await page.evaluate(
        (el) => el.textContent?.trim() || "",
        descriptionElement
      );


      return product;
    } else {

      console.log("Elemento não encontrado. Tente novamente.")
      await delay(2000)

      return undefined;
    }
  } catch {

    console.log("Pagina não encontrada ou invalida, tente novamente");
    await delay(2000)
    return undefined;
  } finally {
    await browser.close();
  }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    

export { ScrapWebsite };
