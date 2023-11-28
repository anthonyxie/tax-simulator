'use client';

import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GameNarrative() {
    const searchParams = useSearchParams();
    const reason = searchParams.get('reason');
    const router = useRouter();
    const [storyIndex, setStoryIndex] = useState(0);
    const [gameStory, setGameStory] = useState([
        `You took one too many risks - and the IRS has come knocking. ${reason == "reporting" ? "The IRS discovered that her salary was underreported, and audited him." : ""}${reason == "bank" ? "The IRS found the offshore accounts and seized them." : ""}${reason == "loan" ? "The collateral of your loan collapsed and she couldn't pay it back." : ""} ${reason == "donation" ? "The IRS discovered the charity she owned was secretly paying her a salary and was largely fraudulent." : ""} 
        Elizabeth, denying any knowledge of the actions you took, has simply paid back her duly owed taxes; at the same time,
        she has filed a lawsuit against you to recover damages.`,
        `You don't stand a chance against her fancy lawyers, and you are forced to 
        either declare backrupcy or give her 30 % of your income until the day you die.`,
        `You think back to that faithful day, when she offered you the job, and all the potential
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