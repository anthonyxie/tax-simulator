'use client';

import '../../resources/home.css';
import React from 'react';
import Link from 'next/link';

export default function StartPage() {
    return (
        <>
            <div id="homeDiv">

                <div id="heading">
                    <br />
                </div>
                <div id="bottomImgs">
                    <div id="bottomImgsCalc"><img src="/homeImgs/calculator.png" alt="calculator with 377g on it" /> </div>
                    <div id="bottomImgsThing"><img src="/homeImgs/thing.png" alt="paper thingy?" /> </div>
                </div>

            </div>
            <div id="overlay">
                <h1>Game End</h1>
                <Link id="endLink" href="/">back to home</Link>
            </div>
        </>
    );
}
