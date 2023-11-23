export interface Stock {
    ticker: string,
    price: number,
    amount: number
}

export interface Asset {
    name: string,
    price: number,
    
}

export interface Property {
    name: string,
    price: number
}

export interface Art {
    name: string,
    prices: number[],
    priceIndex?: number,
    appraised: boolean,
    donated?: boolean
}

export interface Donation {
    charity: string,
    price: number
}

export const listOfStocks = [
    { ticker: "dogcoin", price: 1000, amount: 100 },
    { ticker: "anthonycoin", price: 200, amount: 500 },
    { ticker: "coincoin", price: 300, amount: 600},
    { ticker: "FOUR", price: 400, amount: 500 },
    { ticker: "FIVE", price: 500, amount: 500 },
  ];

  export const listOfDonations = [
    { charity: "ONE", price: 100 },
    { charity: "TWO", price: 200 },
    { charity: "ONE", price: 100 },
    { charity: "ONE", price: 100 },
  ];



export const listOfArts = [
    {name: "Nepo Child Artwork", appraised: false, prices: [5000, 60000, 100000]},
    {name: "Narry Stight by Paclo Pibasso", appraised: false, prices: [50000, 60000, 70000]},
    {name: "Picture Of A Dog", appraised: false, prices: [100, 200, 200000]}
]
