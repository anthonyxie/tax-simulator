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
    imgPath: string,
    location: string,
    value: number,
    area?: number,
    description?: string
}

export interface Art {
    name: string,
    startPrice: number,
    imgPath: string,
    prices: number[],
    priceIndex?: number,
    appraised: boolean,
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
    country: string,
}

export const listOfStocks = [
    { ticker: 'dogcoin', price: 1000, amount: 100 },
    { ticker: 'anthonycoin', price: 200, amount: 500 },
    { ticker: 'coincoin', price: 300, amount: 600 },
    { ticker: 'FOUR', price: 400, amount: 500 },
    { ticker: 'FIVE', price: 500, amount: 500 },
];

export const listOfDonations = [
    {
        charity: 'Care Haven Foundation',
        description: 'Care Haven Foundation aims to provide shelter and support to homeless individuals and families. Through partnerships with local communities, they strive to offer safe environments, access to basic necessities, and long-term rehabilitation programs to help people rebuild their lives.',
        riskFactor: 0,
        returnFactor: 1,
    },
    {
        charity: 'Green Earth Initiative',
        description: 'Green Earth Initiative focuses on environmental conservation and sustainability. They organize tree planting campaigns, clean-up drives, and awareness programs to educate communities about the importance of protecting the planet. They also collaborate with local governments to promote eco-friendly policies.',
        riskFactor: 0,
        returnFactor: 1,
    },
    {
        charity: "Brighter Futures",
        description: "Brighter Futures is committed to providing quality education for underprivileged children. They strive to build schools and learning centers in disadvantaged areas while offering scholarships, mentorship programs, and resources to ensure equal opportunities for all children, regardless of their background.",
        riskFactor: 0,
        returnFactor: 1,
    },
    {
        charity: "Tropical Penguin Preservation Society",
        description: "The Tropical Penguin Preservation Society (TPPS) is dedicated to the preservation and protection of the tropical penguin population, as featured in the hit movie Penguins of Madagascar. Their mission is to raise public awareness and educate people about the issues plaguing these penguins and to offer resources to support their wellbeing.",
        riskFactor: 0.1,
        returnFactor: 0.9,
    }
];

export const listOfArts = [
    { name: 'Nepo Child Artwork',
        artist: 'Anthony',
        year: '2023',
        startPrice: 10,
        imgPath: '/assetsImgs/vase.png',
        appraised: false,
        prices: [10000, 60000, 100000] },
    { name: 'Narry Stight by Paclo Pibasso',
        startPrice: 15,
        artist: 'Ore',
        year: '2023',
        imgPath: '/assetsImgs/monet.png',
        appraised: false,
        prices: [50000, 60000, 70000] },
    { name: 'Picture Of A Dog',
        artist: 'Ting',
        startPrice: 20,
        year: '2023',
        imgPath: '/assetsImgs/bunny.png',
        appraised: false,
        prices: [100, 200, 200000] },
];

export const listOfAccounts = [
    { name: 'Bank of America', amount: 1000000, APY: 0.01, country: 'U.S.' },
    { name: 'Silicon Valley Bank', amount: 20000000, APY: 0.01, country: 'U.S.' },
    { name: 'CapitalTwo', amount: 4732012, APY: 0.043, country: 'U.S.' },
];

export const listOfCountries = [
    //REPLACE TAXES WITH SOME NUMERICAL CALCS
    { country: 'U.S.', risk: 'none', taxes: 'high' },
    { country: 'Hong Kong', risk: 'medium', taxes: 'very low' },
    { country: 'Switzerland', risk: 'medium', taxes: 'low' },
    { country: 'Bahamas', risk: 'high', taxes: 'very low' },
    { country: 'UAE', risk: 'medium', taxes: 'medium' },
];

export const listOfEvaluators = [
    { name: 'Risky McRiskPants', index: 2 },
    { name: 'Realistic Evaluator', index: 0 },
    { name: 'Medium Burger with Fries Evaluator', index: 1 },
];

export const listOfProperties = [
    { name: 'Primary Residence', imgPath: '/propertyImgs/house2.jpg', location: 'Sunnyvale, CA', value: 2300000, description: 'hahaha' },
    { name: 'Vacation Home', imgPath: '/propertyImgs/beachhouse.jpg', location: 'Newport Beach, CA', value: 4100000, description: 'hahaha' },
    { name: 'Investment Home', imgPath: '/propertyImgs/apartment.jpg', location: 'Menlo Park, CA', value: 1500000, description: 'hahaha' }
]