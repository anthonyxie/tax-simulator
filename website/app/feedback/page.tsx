'use client';

import Link from 'next/link';
import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function FeedbackNarrative() {
    const searchParams = useSearchParams();
    const tax = searchParams.get('amount') || '0';
    const round: number = parseInt(searchParams.get('round') || '0', 10);
    const liquidFunds = searchParams.get('liquid');

    const positiveDisplayText = [
        // round 0
        [`You saved Jessica ${tax} in taxes, and were able to acquire him ${liquidFunds} in new liquid funds. She invested all that money in a crypto presale. She sold all her shares immediately when the coin was released publicly, making a killing. All the retail investors saw the value of their coins plummet to zero soon after.
        She used the liquid funds to buy a helicopter, and give it a custom paint job.It’s black, with bright orange flames going up the sides. Jessica then decides to travel, sending you a post-card from a Romania at a tourist trap known for its occult texts. Weird.
        You really love your job.`],
        // round 1
        [`You saved Jessica ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. She sells her brain-cloning startup and begins buying up little figurine toys. At a party right after the sale she thanks you, and leaves muttering to herself about how she will never be 
        alone now. And she buys another condo while you get a 5k raise. You really love your job.`],

        ['You saved Jessica ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. The toy company explodes in sucess, but she sells it to. Jessica has dark circles under her eyes, and mutters to herself incessantly. She invites you to come over often, but you have to start refusing her offers.\n She tells you that she will find a way to thank you, in another world. '],
        ['You saved the world by saving Jessica/Noh Wan  ${tax} in taxes Good job!'],
    ]

    const negativeDisplayText = [
        // round 0
        [`Y had to pay -${tax} more in taxes this year. He does not seem happy about it. He doesn't say much,
          but the look he gives you tells you that you better do better next year. Or else.`],
        // round 1
        ["round 1 neg feedback"],
        ["round 2 neg feedback"],
        ["round 3 neg feedback"],
    ]

    const neutralDisplayTest = 
        `Y didn't save any money from taxes this year. He didn't explicit say so, but you could sense him
        thinking to himself: 'Why did I even hire them in the first place?' 
        
        This is not good. You think of your aging parents, and vow to improve.`

    let displayText = parseInt(tax) > 0 ? positiveDisplayText[round] : (parseInt(tax) === 0 ? neutralDisplayTest : negativeDisplayText[round]);

    const NextRoundLink = round < 3 ? (
        <Link id="continueButton" href={{ pathname: "/narrative", query: { round: round + 1 } }}>Next</Link>
    ) : (
        <Link id="continueButton" href="/ending">Next</Link>
    );

    return (
        <div id="narrativeBackground" className="flexCol">
            <div id="narrativeWrapper">
                <p id="narrativeText">
                    {displayText}
                </p>
            </div>
            {NextRoundLink}
        </div>
    );
}
