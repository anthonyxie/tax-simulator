export const listOfStocks = [
    { ticker: 'dogcoin', price: 1000, amount: 400 },
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
        charity: 'Brighter Futures',
        description: 'Brighter Futures is committed to providing quality education for underprivileged children. They strive to build schools and learning centers in disadvantaged areas while offering scholarships, mentorship programs, and resources to ensure equal opportunities for all children, regardless of their background.',
        riskFactor: 0,
        returnFactor: 1,
    },
    {
        charity: 'Tropical Penguin Preservation Society',
        description: 'The Tropical Penguin Preservation Society (TPPS) is dedicated to the preservation and protection of the tropical penguin population, as featured in the hit movie Penguins of Madagascar. Their mission is to raise public awareness and educate people about the issues plaguing these penguins and to offer resources to support their wellbeing.',
        riskFactor: 0.1,
        returnFactor: 0.9,
    },
];

export const listOfArts = [
    {
        name: 'Slime Vase',
        index: 0,
        artist: 'Anthony',
        year: '2023',
        startPrice: 10,
        imgPath: '/assetsImgs/a9.png',
        appraised: false,
        prices: [10000, 60000, 100000],
    },
    {
        name: 'Non-Binary in Terra(cota)',
        index: 1,
        startPrice: 15,
        artist: 'Terra',
        year: '2023',
        imgPath: '/assetsImgs/a10.png',
        appraised: false,
        prices: [50000, 60000, 70000],
    },
    {
        name: 'Picture Of A Dog',
        index: 2,
        artist: 'Alexia',
        startPrice: 20,
        year: '2023',
        imgPath: '/assetsImgs/a11.png',
        appraised: false,
        prices: [100, 200, 200000],
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
    { name: 'Medium Burger with Fries Evaluator', imgPath: '/evalImgs/1.png', index: 1, quote: 'We can be reasonable! I know what you want me to do but I\'m going to do what you need' },
];

export const listOfProperties = [
    { name: 'Primary Residence', imgPath: '/propertyImgs/house2.jpg', location: 'Washington, DC', value: 299990000, description: 'Elizabeth has made her home at the capitol building' },
    { name: 'Vacation Home', imgPath: '/propertyImgs/beachhouse.jpg', location: 'United Nation Headquarters', value: 4100000, description: 'Elizabeth\'s domination is almost complete' },
    { name: 'Homunculi Parts', imgPath: '/propertyImgs/homunculi.png', location: 'Menlo Park, CA', value: 15660000, description: 'They are fleshy and rubbery at the same time. Disturbing' },
    { name: 'Brain-Cloning facility', imgPath: '/propertyImgs/brainClone.jpg', location: 'Stanford, CA', value: 15346000, description: 'mass-produced supposedly quantum AI minds are made here' },
    { name: 'Government Trade secrets', imgPath: '/propertyImgs/govSecrets.png', location: 'Menlo Park, CA', value: 1523400, description: 'More than the panama papers, dirt on every world government is here' },
    { name: 'Stem Cells', imgPath: '/propertyImgs/stemcellfarm.png', location: 'Menlo Park, CA', value: 167834000, description: 'If the minds are just Ai, why are there stem cells??' },
];

export const income = 1000000;
export const salary = 871340;
export const fundsGoal = 450000;
export const initialTaxes = 479000;
