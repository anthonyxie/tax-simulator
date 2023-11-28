'use client';

import Link from 'next/link';
import '../../resources/stylesheet.css';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FeedbackNarrative() {
    const searchParams = useSearchParams();
    const tax = searchParams.get('amount') || '0';
    const round: number = parseInt(searchParams.get('round') || '0', 10);
    const liquidFunds = Number(searchParams.get('liquid'));
    const reportingRisk = Number(searchParams.get('reportingRisk'));
    const loanRisk = Number(searchParams.get('loanRisk'));
    const donatingRisk = Number(searchParams.get('donatingRisk'));
    const bankReportingRisk = Number(searchParams.get('bankReportingRisk'));
    const router = useRouter();

    useEffect(() => {
        let random = Math.floor(Math.random() * 100) + 1;
        let reason = ""
        if (random <= reportingRisk) {
            reason = "reporting";
            router.push(`/audit?round=${round}&reason=${reason}`);
        }
        else if (random <= reportingRisk + loanRisk) {
            reason = "loan";
            router.push(`/audit?round=${round}&reason=${reason}`);
        }
        else if (random <= reportingRisk + loanRisk + donatingRisk) {
            reason = "donating";
            router.push(`/audit?round=${round}&reason=${reason}`);
        }
        else if (random <= bankReportingRisk + reportingRisk + loanRisk + donatingRisk) {
            reason = "bank";
            router.push(`/audit?round=${round}&reason=${reason}`);
        }
    }, []);

    // ORIGINAL TEXT
    // [`You saved Jessica ${tax} in taxes, and were able to acquire him ${liquidFunds} in new liquid funds. She invested all that money in a crypto presale. She sold all her shares immediately when the coin was released publicly, making a killing. All the retail investors saw the value of their coins plummet to zero soon after.
    //     She used the liquid funds to buy a helicopter, and give it a custom paint job.It’s black, with bright orange flames going up the sides. Jessica then decides to travel, sending you a post-card from a Romania at a tourist trap known for its occult texts. Weird.
    //     You really love your job.`],
    //     // round 1
    //     [`You saved Jessica ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. She sells her brain-cloning startup and begins buying up little figurine toys. At a party right after the sale she thanks you, and leaves muttering to herself about how she will never be
    //     alone now. And she buys another condo while you get a 5k raise. You really love your job.`],

    //     ['You saved Jessica ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. The toy company explodes in sucess, but she sells it to. Jessica has dark circles under her eyes, and mutters to herself incessantly. She invites you to come over often, but you have to start refusing her offers.\n She tells you that she will find a way to thank you, in another world. '],
    //     ['You saved the world by saving Jessica/Noh Wan  ${tax} in taxes Good job!'],
    // ]
    
    const positiveDisplayText = [
        // round 0
        [`You saved Elizabeth ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. 
        She uses the money to consult experts for research. She tells you she wants to get into the field of consumer healthcare - she has some exciting
        new ideas. You think of your dad, who has a rotton tooth because his insurance doesn't cover dental. You really love your job.`],
        // round 1
        [`You saved Elizabeth ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. 
        She uses it as seed money to create a new biotech healthcare startup that will "revolutionize the field", she claims.
        And she buys another condo while you get a 5k raise. You really, really love your job.`],
        // round 2
        [`You saved Elizabeth ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. 
        Her company gets funding from numerous VC firms - it is now valued at 92 million dollars.
        She has dark circles under her eyes, and mutters to herself incessantly. You still don't quite understand
        what her company does - something to do with testing? Did you hear her say blood?`],
        // round 3
        [`You saved Elizabeth ${tax} in taxes, and were able to acquire her ${liquidFunds} in new liquid funds. 
        She tells you she couldn't have accomplished everything she has without you. In the magazine stand by your
        apartment, you see a cover of Forbes with her face on it, printed in black and white. Below, it reads:
        'The Next Steve Careers: Elizabeth House'.`],
    ]

    const neutralDisplayTest = 
        `Elizabeth didn't save any money from taxes this year. She didn't explicit say so, but you could sense her
        questioning why she hired you in the first place.
        This is not good. You think of your aging parents, and vow to improve.`

    let displayText = parseInt(tax) > 0 ? positiveDisplayText[round] : neutralDisplayTest;

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
