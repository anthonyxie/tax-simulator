export interface Stock {
    ticker: string,
    price: number
}

export interface Asset {
    name: string,
    price: number
}

export interface Property {
    name: string,
    price: number
}

export interface Art {
    name: string,
    appraised: boolean,
    prices: number[],
    price?: number
}

export const listOfStocks = [
    { ticker: "ONE", price: 100 },
    { ticker: "TWO", price: 200 },
    { ticker: "THREE", price: 300 },
    { ticker: "FOUR", price: 400 },
    { ticker: "FIVE", price: 500 },
  ];