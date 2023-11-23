"use client";
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { GridLayout } from '@/components/GridLayout/GridLayout';
import { FloatingLabelInput } from '@/components/FloatingLabel/FloatingLabel';
import { SliderInput } from '@/components/SliderInput/SliderInput';
import { CSSProperties, useEffect, useState } from 'react';
import StocksList from '@/components/Accordion/StocksList';
import { ActionIcon, Button, Image } from '@mantine/core';
import StockItem from '@/components/StockItem/StockItem';
import StockList from '@/components/StockList/StockList';
import '../resources/home.css';
import Link from 'next/link';
import NextImage from 'next/image';
import calc from '../public/homeImgs/calculator.png'
import paper from '../public/homeImgs/papers.png'
import thing from '../public/homeImgs/thing.png'
import React from 'react';

export default function StartPage() {

  return (
    <>
    <div id='homeDiv'>

      <div id="heading">
        <br></br>
      </div>      
      <div id="bottomImgs">
        <div id="bottomImgsCalc"><img src={"/homeImgs/calculator.png"} alt="calculator with 377g on it"/> </div>
        <div id="bottomImgsThing"><img src={"/homeImgs/thing.png"} alt="paper thingy?"/> </div>
      </div>

    </div>
    <div id="overlay">
      <h1>Tax Hero</h1>
      <Link id="startLink" href="/portfolio">START</Link>
    </div>
    </>
  );
}
