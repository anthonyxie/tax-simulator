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
}

export interface Donation {
    charity: string,
    price: number,
}

export interface BankAccount {
    name: string,
    amount: number,
    APY: number,
    country: string,
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
    {name: "Nepo Child Artwork", appraised: false, prices:  [10000, 60000, 100000]},
    {name: "Narry Stight by Paclo Pibasso", appraised: false, prices: [50000, 60000, 70000]},
    {name: "Picture Of A Dog", appraised: false, prices: [100, 200, 200000]}
]

export const listOfAccounts = [
    { name: "Bank of America", amount: 1000000, APY: 0.01, country: 'U.S.'},
    { name: "Silicon Valley Bank", amount: 20000000, APY: 0.01, country: 'U.S.' },
    { name: "CapitalTwo", amount: 4732012, APY: 0.043, country: 'U.S.' },
]

export const listOfCountries = [
    //REPLACE TAXES WITH SOME NUMERICAL CALCS
    { country: "U.S.", risk: "none", taxes: "high"},
    { country: "Hong Kong", risk: "medium", taxes: "very low"},
    { country: "Switzerland", risk: "medium", taxes: "low"},
    { country: "Bahamas", risk: "high", taxes: "very low"},
    { country: "UAE", risk: "medium", taxes: "medium"},
]

export const listOfEvaluators = [
    { name: "Risky McRiskPants", index: 2},
    { name: "Realistic Evaluator", index: 0},
    { name: "Medium Burger with Fries Evaluator", index: 1}
]