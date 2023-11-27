export interface Stock {
    ticker: string,
    price: number,
    amount: number,
    disabled?: boolean
}

export interface Asset {
    name: string,
    price: number,
}

export interface Property {
    name: string,
    imgPath: string,
    location: string,
    value: number,
    area?: number,
    description?: string
}

export interface Art {
    name: string,
    index: number,
    startPrice: number,
    artist: string,
    year: string,
    imgPath: string,
    prices: number[],
    priceIndex?: number,
    appraised: boolean,
}

export interface Eval {
    name: string,
    imgPath: string,
    index: number[],
    quote: string,
}

export interface Donation {
    charity: string,
    description: string,
    returnFactor: number,
    riskFactor: number,
}

export interface BankAccount {
    name: string,
    amount: number,
    APY: number,
    country: string
}
