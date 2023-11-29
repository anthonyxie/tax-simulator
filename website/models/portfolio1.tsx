export const listOfStocks = [
    { ticker: 'dogcoin', price: 1000, amount: 400 },
    { ticker: 'anthonycoin', price: 200, amount: 500 },
    { ticker: 'coincoin', price: 300, amount: 600 },
    { ticker: 'Ethereum', price: 400, amount: 500 },
    { ticker: 'Scamcoin', price: 500, amount: 500 },
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
        name: 'Flower Power in Mud',
        index: 0,
        artist: 'Anthony',
        year: '2023',
        startPrice: 10,
        imgPath: '/assetsImgs/a3.png',
        appraised: false,
        prices: [10000, 60000, 100000],
    },
    {
        name: 'Nepo Baby in Color',
        index: 1,
        startPrice: 15,
        artist: 'Opal',
        year: '2023',
        imgPath: '/assetsImgs/a4.png',
        appraised: false,
        prices: [50000, 60000, 70000],
    },
    {
        name: 'The Sky is the Limit',
        index: 2,
        artist: 'Eevee',
        startPrice: 20,
        year: '2023',
        imgPath: '/assetsImgs/a5.png',
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
    { name: 'Primary Residence', imgPath: '/propertyImgs/house2.jpg', location: 'Sunnyvale, CA', value: 3300000, description: 'There’s been a basement installed, why? What could it be for.' },
    { name: 'Vacation Home', imgPath: '/propertyImgs/beachhouse.jpg', location: 'Newport Beach, CA', value: 6100000, description: 'Free from the watchful eye of governments and passerby, a fitting fortress of solitude' },
    { name: 'Rolls-Royce', imgPath: '/propertyImgs/rollsroyce.jpg', location: 'Newport Beach, CA', value: 280000, description: 'The SUV, modeled on the latest innovations in the tech industry instantly draw your attention. The supercooled engine is quicker than any electric car. Elizabeth has spared no expense.' },
    { name: 'Investment Home', imgPath: '/propertyImgs/apartment.jpg', location: 'Menlo Park, CA', value: 4500000, description: 'Another home just to get the ability to get more homes. Homeception' },
    { name: 'Mysterious Laboratory', imgPath: '/propertyImgs/mysteriousLab.jpg', location: 'Brasov, Romania', value: 666000, description: 'What could this possibly be for?' },
    { name: 'Sacred Texts', imgPath: '/propertyImgs/sacredTexts.png', location: 'New York, NY', value: 4440000, description: 'Limited edition copies of the Bhagavad Gita, Torah, Bible, Quran, books of wiccan witchcraft and philosophers stone' },
    { name: 'Copyrights and Patents', imgPath: '/propertyImgs/patent.jpg', location: 'Stanford, CA', value: 999235, description: ' Elizabeth is a genius, that is one thing that no one can deny' },
];

export const income = 1000000;
export const salary = 871340;
export const fundsGoal = 450000;
export const initialTaxes = 602852.35;
