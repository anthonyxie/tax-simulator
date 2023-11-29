'use client';

import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function EndingNarrative() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [storyIndex, setStoryIndex] = useState(0);

    // BAREBONES VERS
    const displayText = [
        // round 0
        [
            `As Elizabeth's wealth and fame soared, you have been able to build new clientele based on
            your past experience as her personal accountant. 15 years have passed, and you now own one of the
            world's leading accounting firms providing specialized services to high-value clients.`,
        ],
        [
            `Meanwhile, Elizabeth's blood-testing company has been exposed as fraudulent. Her net-worth plummeted
            to zero and she was sentenced to 11 years in jail by misleading investors and the government.`
        ],
        [
            `Sometimes before you sleep at night, you imagine all the taxes you've ever helped keep from the government as 
            a mountain of gold coins. A peak too high to climb. It could probably help end homelessness, or subsidize all university tuition,
            or fund universal free healthcare.`],
        [
            `And then you just close your eyes. You sleep soundly.`
        ],
    ];

    const [gameStory, setGameStory] = useState(displayText);

    const handleContinue = () => {
        if (storyIndex < gameStory.length - 1) {
            setStoryIndex(storyIndex + 1);
        } else {
            // end of the narrative
            console.log('End of the narrative');
            router.push(`/ending`);
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
