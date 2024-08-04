interface IImagens {
    url: string
}

interface IProduct{
    URL: string,
    name: string,
    price: string,
    description: string,
    image: IImagens[],
}

export { IProduct, IImagens }