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

export interface Country {
    country: string,
    risk: string,
    taxes: string,
    bankNames: string[],
}

export const helpTip = {
    property: 'property help text',
    assets: 'Get your artwork evaluated to donate it for more than your client\'s original purchasing price.',
    bank: 'Money sitting in the bank generates interest which is taxed as income tax. Avoid the tax by keeping the money in offshore bank accounts.',
    stocks: 'You can sell your stocks to "liquidate funds" but remember that will also be taxed! You can also use your stock as collatoral in the loans tab.',
    charity: 'Decrease the taxes by donating money. Decrease taxes ALOT by donating money to the client\'s charity.',
    reportIncome: 'Income tax is based off of the income that is reported. Report less income to pay less taxes.',
    loan: 'loan help text',
};
