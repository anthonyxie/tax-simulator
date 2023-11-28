'use client';

import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FiredNarrative() {
    const router = useRouter();
    const [storyIndex, setStoryIndex] = useState(0);
    const [gameStory, setGameStory] = useState([
        `Once again, Elizabeth has paid more taxes than she originally would have, sans your involvement. 
        Enough is enough. Only slightly regretfully, she tells you that you are fired.`,
        `You know it was your poor performance that led to this result. But you think of the endless
        zeros in Elizabeth's accounts, and your parents, who have worked tirelessly for over thirty five years 
        and will never see a fraction of that money.`,
        `Finally, you think back to that faithful day, when she offered you the job, and all the potential
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
                <img src='/narrativeImgs/fired.jpg' alt="text saying FIRED" />
            </div>
            <button id="continueButton" onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
}