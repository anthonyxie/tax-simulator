'use client';

/* eslint-disable max-len */
import { Image } from '@mantine/core';
import '../../resources/guide.css';
import Link from 'next/link';
import React from 'react';

export default function InstructionPage() {
  return (
    <>
    <div id="homeDiv">
      <div id="heading">
        <br />
      </div>
      <div id="bottomImgs">
        <div id="bottomImgsCalc"><Image src="/homeImgs/calculator.png" alt="calculator with 377g on it" /> </div>
        <div id="bottomImgsThing"><Image src="/homeImgs/thing.png" alt="paper thingy?" /> </div>
      </div>
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
        <div className="flexCol" id="midDiv">
          <text>You are an accountant to a new member of the 1%! a.k.a an extremely rich person.</text>
        </div>
        <div id="lastDiv">
          <Link href={{ pathname: '/' }}><text id="backLink">Let&apos;s lower those taxes!</text></Link>
        </div>
      </div>
    </div>
    </>
  );
}
