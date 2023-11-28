'use client';

import { Image } from '@mantine/core';
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
        <div id="bottomImgsCalc"><Image src="/homeImgs/calculator.png" alt="calculator with 377g on it" /> </div>
        <div id="bottomImgsThing"><Image src="/homeImgs/thing.png" alt="paper thingy?" /> </div>
      </div>

    </div>
    <div id="overlay">
      <h1>Tax Hero</h1>
      <Link id="startLink" href={{ pathname: '/portfolio', query: { round: 0 } as { round: number } }}>START</Link>
      <Link id="startLink" href={{ pathname: '/narrative', query: { round: 0 } as { round: number } }}>NARRATIVE</Link>
      <Link id="startLink" href={{ pathname: '/guide', query: { round: 0 } as { round: number } }}>GUIDE</Link>
    </div>
    </>
  );
}
