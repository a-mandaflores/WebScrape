import { IProduct } from "../interface/IProduct";

interface IScraper {
    scrape(url: string): Promise<IProduct>;
}

export { IScraper }