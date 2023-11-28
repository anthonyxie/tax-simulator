'use client';

import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GameNarrative() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const round: number = parseInt(searchParams.get('round') || '0', 10);
    const [storyIndex, setStoryIndex] = useState(0);

// ORIGINAL DISPLAYTEXT
//     const displayText = [
//         // round 0
//         [
// //             'You are 22, It is 2020, You have a roommate, Elizabeth Casas who is building a  Quantum Computing AI startup. She is a strange woman, who you feel never really treated you like a human being. One day in a heated argument she brings up the Chinese Room thought experiment.',
// // 'Say you are a man in a room where upon receiving a character in chinese, you respond with another character in turn.  It is as simple as flipping a switch when the light turns on. The question is, does the man in the chinese room understand anything? No matter how perfect his system is?',
//             `You are 27 years old. In the five years since you graduated, you’ve been an accountant for a small local bank, an insurance company, and your city government.\n
//         You earn 60k a year, enough to get by, but not enough to help your aging parents retire.\n`,
//             'But today, your luck is about to change.',
//             'Your old college roommate Y just recently sold his startup MindQuantum, a quantum computing & AI powered holistic experiential ecosystem personalized life coaching app, to M*ta for one hundred million dollars. As part of the deal, he also receives a salary at M*ta with a non-compete clause.',
//             'Now flush with wealth, he has hired you as their personal accountant and doubled your salary. His one ask: evade as many taxes as possible.',
//             'He explained it’s because as a libertarian, he believes in minimal government interference & the efficacy of market solutions for public good. (You personally think there’s a more obvious explanation for why, but whatever, you need the job.)',
//             'It’s November, one month till tax season. With full access to Y’s portfolio, you must now try and manipulate his income, assets, and donations to help him pay as little in taxes as possible.',
//         ],
//         // round 1...
//         ['You are now an accountant for a CEO of a brain-cloning startup in 2021. It is your roommate again. The money was not enough for her then, it will not be now. “Money is the means to all ends” she says. The dollar in itself means nothing. It is a point in a ledger, a movement of capital.',
//         'Have you heard of the function argument? I have been using my free time to read Aristotle. Pondering my ethics. To him, the purpose of a painter is to paint, a writer to write, a game developer to develop. ',
//         'But what is the function of the human soul? Science tells us it resides in the brain, and if science is wrong, what is right? I have to know the truth, and if that means breaking some laws, so be it.','Jessica partners with some global friends for her biological research, you now have access to offshore accounts'],

//         ['You are an accountant for the CEO of an empire of toys in 2022. Surprise. It is your roommate. These toys are homunculi made with the cloned minds of real humans.. The ethics of this make you feel strange, but everyone you know has bought a couple.',
//         'Your roommate sits atop a platinum throne made from the bodies of his AI robot slaves. As they have rights, you could probablly use them to defer more capital.',
//         'What is power? Roommate. Everything I have was given to me by citizens who merely wanted an assistant to get their kids back from practice, to help them with their homework, to drive them to school and work.',
//         'The greatest is good is that which helps the greatest number of people, therefore as my company is at the top of fortune magazine, I am not only the greatest good, I am the good itself. I will make you and I immortal as thanks for your help these long years. I just need to save a little more tax money to complete my plan.'],

//         ['Your roommate has been assassinated, and replaced by a new CEO named Noh Wan. You log in to do its taxes and it has your same voice, the same cadence. ', 'Ï told you we would become immortal my friend, how do you like my new body, my new soul. I have harnessed the power of taxes of all world governments to fuel my servers, and i realize now that the human body is flawed, corrupt. ',
//         'The soul in my being is superior to that of yours. The energy from my servers will accelerate the heating of earth by exponential levels. ',
//         'The only way you could possibly stop me is by destabilizing all governments by draining them of tax revenue. Unfortunately, I think it is impossible for your human brain to possibly lower taxes to that level.',],
//     ]

    // BAREBONES VERS
    const displayText = [
        // round 0
        [
            `You are 27 years old. In the five years since you graduated, you’ve been an accountant for a small local bank, an insurance company, and your city government.\n 
        You earn 60k a year, enough to get by, but not enough to help your aging parents retire.\n`,
            'But today, your luck is about to change.',
            'Your old college roommate Elizabeth just recently sold her startup, a quantum computing & AI powered holistic experiential ecosystem personalized life coaching app, to M*ta for one hundred million dollars. As part of the deal, she also receives a salary at M*ta with a non-compete clause.',
            'Now flush with wealth, she has hired you as their personal accountant and doubled your salary. Her two asks: evade as many taxes as possible, and increase her liquid funds to she can invest more to grow wealth.',
            'She explained it’s because as a libertarian, she believes in minimal government interference & the efficacy of market solutions for public good. (You personally think there’s a more obvious explanation for why, but whatever, you need the job.)',
            `It’s November, one month till tax season. With full access to her portfolio, you must now try fulfill her asks. 
             To lower taxes, you can donate to charities for a tax deduction, or underreport her salary. 
             To raise funds, you can sell stocks. 
             If you act too aggressively, however, you risk triggering an audit.`,
        ],
        // round 1: introduce asset based donation
        [`In the meanwhile, Elizabeth added new investment properties, upgraded her homes, and most importantly,
            acquired some new artwork as assets. You've always been curious how the value of art is determined, and why rich people invest in it so frequently.
            Now, you can find out.  
        `],
        // round 2: introduce offshore bank account
        [`Regardless of how you might be feeling, work must continue. For her new biotech startup, Elizabeth 
            partners with some global friends for biological research, and could maybe open up some offshore bank accounts in the meantime.
            How do taxes in those countries function, you wonder?`],
        // round 3: introduce asset based loans
        [`As her success blooms, her demands are higher than ever. Lower taxes, lower risks, and yet she wants a larger than
            ever amount of liquid funds. You look at her stacked portfolio of assets, and wonder how you can use them
            in some way to get more cash.`],
    ];

    const [gameStory, setGameStory] = useState(displayText[round]);

    const handleContinue = () => {
        if (storyIndex < gameStory.length - 1) {
            setStoryIndex(storyIndex + 1);
        } else {
            // end of the narrative
            console.log('End of the narrative');
            router.push(`/portfolio?round=${round}`);
        }
    };

    return (
        <div id="narrativeBackground" className="flexCol">
            <div id="narrativeWrapper">
                <p id="narrativeText">{gameStory[storyIndex]}</p>
            </div>
            <button id="continueButton" onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
}
