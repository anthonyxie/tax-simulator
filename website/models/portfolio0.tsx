export const listOfArts = [
    {
        name: 'Nepo Child Artwork',
        index: 0,
        artist: 'Anthony',
        year: '2023',
        startPrice: 10,
        imgPath: '/assetsImgs/a0.png',
        appraised: false,
        prices: [10000, 60000, 100000]
    },
    {
        name: 'Narry Stight by Paclo Pibasso',
        index: 1,
        startPrice: 15,
        artist: 'Ore',
        year: '2023',
        imgPath: '/assetsImgs/a1.png',
        appraised: false,
        prices: [50000, 60000, 70000]
    },
    {
        name: 'Picture Of A Dog',
        index: 2,
        artist: 'Ting',
        startPrice: 20,
        year: '2023',
        imgPath: '/assetsImgs/a2.png',
        appraised: false,
        prices: [100, 200, 200000]
    },
];

export const listOfAccounts = [
    { name: 'Bank of America', amount: 1000000, APY: 0.5, country: 'U.S.' },
    { name: 'Silicon Valley Bank', amount: 20000000, APY: 0.5, country: 'U.S.' },
    { name: 'CapitalTwo', amount: 4732012, APY: 0.5, country: 'U.S.' },
];

export const listOfCountries = [
    //REPLACE TAXES WITH SOME NUMERICAL CALCS
    { country: 'U.S.', risk: 'none', taxes: 'high', bankNames: ['CapitalThree', 'Chase', 'Citi'] },
    { country: 'Hong Kong', risk: 'medium', taxes: 'very low', bankNames: ['HSBC', 'Hang Seng', 'Standard Chartered'] },
    { country: 'Switzerland', risk: 'medium', taxes: 'low', bankNames: ['UBS', 'Credit Suisse', 'Zurich Cantonal Bank'] },
    { country: 'Bahamas', risk: 'high', taxes: 'very low', bankNames: ['Ansbacher', 'Bahamas Development Bank', 'Bank of the Bahamas'] },
    { country: 'UAE', risk: 'medium', taxes: 'medium', bankNames: ['Emirates NBD', 'Abu Dhabi Commercial Bank', 'Dubai Bank'] },
];

export const listOfEvaluators = [
    { name: 'Risky McRiskPants', imgPath: '/evalImgs/2.png', index: 2, quote: 'This is gonna be good for you, good for me, good for the artist -- we are all gonna eat!' },
    { name: 'Realistic Evaluator', imgPath: '/evalImgs/0.png', index: 0, quote: 'All you got in this game is your reputation and I have mine! People call me The Judge because of my fairness.' },
    { name: 'Medium Burger with Fries Evaluator', imgPath: '/evalImgs/1.png', index: 1, quote: 'enter thing to say here' },
];

export const listOfProperties = [
    { name: 'Primary Residence', imgPath: '/propertyImgs/house2.jpg', location: 'Sunnyvale, CA', value: 2300000, description: 'hahaha' },
    { name: 'Vacation Home', imgPath: '/propertyImgs/beachhouse.jpg', location: 'Newport Beach, CA', value: 4100000, description: 'hahaha' },
    { name: 'Investment Home', imgPath: '/propertyImgs/apartment.jpg', location: 'Menlo Park, CA', value: 1500000, description: 'hahaha' },
];
