'use client';

import { Image } from '@mantine/core';
import '../../resources/guide.css';
import Link from 'next/link';
import React from 'react';

export default function GuidePage() {
  return (
    <>
    <div className="flexCol" id="parentDiv">
      <text>Tax Hero</text>
      <text>how to play</text>
      <Link id="startLink" href={{ pathname: '/' }}>BACK</Link>
    </div>

    <div id="overlay">
      <div id="homeDiv">
        <div id="heading">
          <br />
        </div>
        <div id="bottomImgs">
          <div id="bottomImgsCalc"><Image src="/homeImgs/calculator.png" alt="calculator with 377g on it" /> </div>
          <div id="bottomImgsThing"><Image src="/homeImgs/thing.png" alt="paper thingy?" /> </div>
        </div>

      </div>
    </div>
    </>
  );
}
