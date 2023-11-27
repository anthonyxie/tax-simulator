'use client';

import Link from 'next/link';
import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'

export default function FeedbackNarrative() {
    const searchParams = useSearchParams()
    const tax = searchParams.get('amount')
    const exists = searchParams.has('amount')
    const liquidFunds = searchParams.has('liquid')

    return (
        <div id="narrativeBackground" className="flexCol">
            <div id="narrativeWrapper">
                <p id="narrativeText">
                    You saved Y ${tax} {exists} in taxes, and were able to acquire him the ${liquidFunds} he needed. He invested all that money in a crypto presale. He sold all his shares immediately when the coin was released publicly, making a killing. All the retail investors saw the value of their coins plummet to zero soon after.
                    He used the liquid funds to buy a helicopter, and give it a custom paint job. It’s black, with bright orange flames going up the sides.
                    You really love your job.
                </p>
            </div>
            <Link id="continueButton" href="/portfolio">Next Round</Link>
        </div>
    );
}
