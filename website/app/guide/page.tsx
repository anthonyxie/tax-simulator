'use client';

import { Image } from '@mantine/core';
import '../../resources/guide.css';
import Link from 'next/link';
import React from 'react';

export default function GuidePage() {
  return (
    <>
    <div id="bottomImgs">
      <div id="bottomImgsCalc"><Image src="/homeImgs/calculator.png" alt="calculator with 377g on it" /> </div>
      <div id="bottomImgsThing"><Image src="/homeImgs/thing.png" alt="paper thingy?" /> </div>
    </div>

    <div id="overlay">
      <div className="flexCol" id="parentDiv">
        <div className="flexRow" id="firstDiv">
            <div id="backBttn">
              <Link href={{ pathname: '/' }}><text id="backLink">BACK</text></Link>
            </div>
            <div className="flexCol" id="guideHeader">
              <text>Tax Hero</text>
              <text>Instruction Guide</text>
            </div>
        </div>
        <div id="midDiv">
          <text>hi</text>
        </div>
        <div id="lastDiv">
          <text>thank you for playing!</text>
        </div>
      </div>
    </div>
    </>
  );
}
