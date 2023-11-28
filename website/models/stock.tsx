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

export interface Instructions {
    title: string,
    text: string,
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
    { title: 'Welcome', text: 'Welcome to Tax Hero! In this game, you are an accoutant for a wealthy client - Elizabeth. \n You will learn how rich people evade their taxes and use those techniques on Elizabeth\'s portfolio to lower her taxes. Don\'t worry! It\'s totally legal! Well, most of it is anyway. \n' },
    { title: 'How to Win pt.1', text: 'At each level, use the given techniques to lower your client\'s taxes. Careful though! Different techniques have a different amount of risk associated with it that depends on the amount, legality, and type. Fill up the risk bar all the way and you certainly will get audited and fired! If you don\'t lower the taxes enough and play it too safe, then Elizabeth might fire you!' },
    { title: 'How to Win pt.2', text: 'Eventually, you will have to meet two goals, lower the tax and liquidate enough assets. As the game progresses, she will also demand you make a certain amount of funds "liquid" for her. To liquidate assets means to take things that are worth money and trade them in for actual money. This could take the form of selling stocks or art.' },
    { title: 'STAGE 0', text: '*insert base techniques you can use with descriptions* ' },
    { title: 'STAGE 1', text: '*insert new techniques you can use with descriptions* ' },
    { title: 'STAGE 2', text: '*insert new techniques you can use with descriptions* ' },
    { title: 'STAGE 3', text: '*insert new techniques you can use with descriptions* ' },
    { titel: '', text: '' },
];

export const listOfEvaluators = [
    { name: 'Risky McRiskPants', imgPath: '/evalImgs/2.png', index: 2, quote: 'This is gonna be good for you, good for me, good for the artist -- we are all gonna eat!' },
    { name: 'Realistic Evaluator', imgPath: '/evalImgs/0.png', index: 0, quote: 'All you got in this game is your reputation and I have mine! People call me The Judge because of my fairness.' },
    { name: 'Medium Burger with Fries Evaluator', imgPath: '/evalImgs/1.png', index: 1, quote: 'enter thing to say here' },
];
