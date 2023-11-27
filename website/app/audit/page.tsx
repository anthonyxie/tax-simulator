'use client';

import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GameNarrative() {
    const router = useRouter();
    const [storyIndex, setStoryIndex] = useState(0);
    const [gameStory, setGameStory] = useState([
        `You took one too many risks - and the IRS has come knocking. Y, denying any knowledge
        of the actions you took, has simply paid back his duly owed taxes; at the same time,
        he has filed a lawsuit against you to recover damages.`,
        `You don't stand a chance against his fancy lawyers, and you are forced to 
        either declare backrupcy or give Y 30 % of your income until the day you die.`,
        `You think back to that faithful day, when Y offered you the job, and all the potential
        that flashed before your eyes: retiring your parents, buying a house, paying off your
        student debt. Now, the illusion has crumbled and all that's left are ruins. Was there a way
        for you to win in the first place?`,
    ]);

    const handleContinue = () => {
        if (storyIndex < gameStory.length - 1) {
            setStoryIndex(storyIndex + 1);
        } else {
            // end of the narrative
            console.log('End of the narrative');
            router.push('/ending');
        }
    };

    return (
        <div id="narrativeBackground" className="flexCol">
            <div id="narrativeWrapper">
                <p id="narrativeText">{gameStory[storyIndex]}</p>
                <br></br>
                <img src='/narrativeImgs/audit.jpg' alt="text saying AUDITED" />
            </div>
            <button id="continueButton" onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
}