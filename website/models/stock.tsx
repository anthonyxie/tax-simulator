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
    charity: 'Decrease the taxes by donating money. By donating to the client\'s charity, they can recoup back some of the money that they donate while still having the same tax writeoff, but be careful -- this move is legally risky!',
    reportIncome: 'Income tax is based off of the income that is reported. Report less income to pay less taxes.',
    loan: 'Apply for loans to gain liquid funds to use for other purposes! Decrease the riskiness of your loan by placing some of your assets as collateral -- aim for a collateral amount that is close to the value of the loan itself to minimize risk!',
};

export const instructionList = [
    'starting page',
    'first page',
];
