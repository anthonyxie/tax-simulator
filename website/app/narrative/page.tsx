'use client';

import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GameNarrative() {
    const router = useRouter();
    const [roundIndex, setRoundIndex] = useState();
    const [storyIndex, setStoryIndex] = useState(0);
    const [gameStory, setGameStory] = useState([
        `You are 27 years old. In the five years since you graduated, you’ve been an accountant for a small local bank, an insurance company, and your city government.\n 
        You earn 60k a year, enough to get by, but not enough to help your aging parents retire.\n`,
        'But today, your luck is about to change.',
        'Your old college roommate Y just recently sold his startup MindQuantum, a quantum computing & AI powered holistic experiential ecosystem personalized life coaching app, to M*ta for one hundred million dollars. As part of the deal, he also receives a salary at M*ta with a non-compete clause.',
        'Now flush with wealth, he has hired you as their personal accountant and doubled your salary. His one ask: evade as many taxes as possible.',
        'He explained it’s because as a libertarian, he believes in minimal government interference & the efficacy of market solutions for public good. (You personally think there’s a more obvious explanation for why, but whatever, you need the job.)',
        'It’s November, one month till tax season. With full access to Y’s portfolio, you must now try and manipulate his income, assets, and donations to help him pay as little in taxes as possible.',
    ]);

    const handleContinue = () => {
        if (storyIndex < gameStory.length - 1) {
            setStoryIndex(storyIndex + 1);
        } else {
            // end of the narrative
            console.log('End of the narrative');
            router.push('/portfolio');
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
