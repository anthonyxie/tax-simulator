'use client';

import '../resources/home.css';
import Link from 'next/link';
import React from 'react';

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
      <h1>Tax Hero</h1>
        <Link id="startLink" href="/portfolio">START</Link>
        <Link id="startLink" href="/narrative">NARRATIVE</Link>
    </div>
    </>
  );
}
