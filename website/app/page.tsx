"use client";
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { GridLayout } from '@/components/GridLayout/GridLayout';
import { FloatingLabelInput } from '@/components/FloatingLabel/FloatingLabel';
import { SliderInput } from '@/components/SliderInput/SliderInput';
import { CSSProperties, useEffect, useState } from 'react';
import StocksList from '@/components/Accordion/StocksList';
import { ActionIcon, Button } from '@mantine/core';
import StockItem from '@/components/StockItem/StockItem';
import StockList from '@/components/StockList/StockList';
import '../resources/home.css';
import Link from 'next/link';

export default function StartPage() {

  return (
    <>
    <div className='flexCol'>

      <h1>Tax Hero</h1>
      
      <Link href="/portfolio">START</Link>
    
      
    </div>
    </>
  );
}
