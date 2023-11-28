'use client';

/* eslint-disable max-len */
import '../../resources/guide.css';
import React from 'react';
import { Button, Image } from '@mantine/core';
import Link from 'next/link';
import About1 from '@/components/AboutInfo/About1';
import About2 from '@/components/AboutInfo/About2';

export default function GuidePage() {
  let clicked = false;

  function bttnClick() {
    clicked = true;
  }

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
            <Link id="backLink" href={{ pathname: '/' }}><text id="backLink">BACK</text></Link>
          </div>
          <div className="flexCol" id="guideHeader">
            <text>About Tax Hero</text>
          </div>
      </div>
      {/* <div className="flexCol" id="midDiv">
        <text>You are an accountant to a new member of the 1%! a.k.a an extremely rich person.</text>
        <text>Learn how the average Joe ends up paying more in taxes than the 1% by using the techniques yourself!</text>
        <text>In each stage you will implement new tax evading strategies for your client. Your goal is for the actual taxes to end up lower than the projected taxes and to create enough liquid funds to satisfy your client.</text>
        <text>Play too risky? Get audited! Too safe? Get fired!</text>
      </div> */}
        { clicked ?
        <About2 /> : <About1 />
        }
      <div id="lastDiv">
        <Link className="letsLink" id="letsLinkId" href={{ pathname: '/' }}><text className="letsLink">Let&apos;s lower those taxes!</text></Link>
        <Button className="letsLink" id="tinyLink" onClick={() => { clicked = true; }}><text className="letsLink" id="tinyTxt">more!</text></Button>
      </div>
    </div>
  </div>
    </>
  );
}
