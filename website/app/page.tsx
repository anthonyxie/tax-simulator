"use client";
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { GridLayout } from '@/components/GridLayout/GridLayout';
import { FloatingLabelInput } from '@/components/FloatingLabel/FloatingLabel';
import { SliderInput } from '@/components/SliderInput/SliderInput';
import { CSSProperties, useEffect, useState } from 'react';
import StocksList from '@/components/Accordion/StocksList';
import { ActionIcon, Button, Tabs } from '@mantine/core';
import StockItem from '@/components/StockItem/StockItem';
import StockList from '@/components/StockList/StockList';
import './stylesheet.css';
import clientImg from './resources/richClient.png';
export default function HomePage() {
  interface Stock {
    ticker: string,
    price: number;
  }
  
  const [netWorth, setNetWorth] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(100000);
  const [stocks, setStocks] = useState({});
  const stocksList = [
    { ticker: "BOOP", price: 100 },
    { ticker: "ZAPZ", price: 200 },
    { ticker: "BIZZ", price: 300 },
    { ticker: "YOYO", price: 400 },
    { ticker: "FLIP", price: 500 },
  ];
  const [taxAmount, setTaxAmount] = useState(0);
  const [properties, setProperties] = useState({});
  
  function incrementYear(event: { preventDefault: () => void; }): any {
    event.preventDefault();

    let joemama = netWorth;
    let poggers = joemama + yearlyIncome;
    setYearlyIncome(yearlyIncome * 1.1);
    setNetWorth(poggers);
  }

  function resetAllValues(event: { preventDefault: () => void; }): any {
    event.preventDefault();
    setNetWorth(0);
    setYearlyIncome(100000);
  }

  function stockToBeAdded(addedStock: Stock): any {
    let tick = addedStock.ticker;
    let newStocks = stocks;
    let prevNetWorth = netWorth;
    setNetWorth(prevNetWorth + addedStock.price);
    
  }

  useEffect(() => {
    setTaxAmount(yearlyIncome * 0.4);
  }, [yearlyIncome, stocks, properties])


  

  return (
    <>
    <div>

      <h1>Y0 Portfolio</h1>

      <div className="flexRow" id="client">
        <div>
          <img src="./resources/richClient.png" alt="rich client img i forgot how to make it work :/" />
        </div>
        
        <div className='flexCol'>
          <text id="clientName">Jane Client Doe</text>
          <text>Net worth: {netWorth}</text>
          <text>Yearly income: {yearlyIncome}</text>
          <text>Projected Taxes: {taxAmount}</text>
        </div>
        
      </div>
      
      <div style={{
        backgroundColor: '#F5EFBB',
        height: "50%",
        marginBottom: "1%",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}>
          <Tabs defaultValue="Properties" color='blue'>
          <Tabs.List>
            <Tabs.Tab value="Properties">
              Properties
            </Tabs.Tab>
            <Tabs.Tab value="Assets">
              Assets
            </Tabs.Tab>
            <Tabs.Tab value="Bank Holdings">
              Bank Holdings
            </Tabs.Tab>
            <Tabs.Tab value="Stocks">
              Stocks
            </Tabs.Tab>
            <Tabs.Tab value="Donations">
              Donations
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Properties">
            properties
            and stuff fbdjskfbkjsdfbnkjdnfjkdsfjksdf jkdnfsjkdf dsf skj hf dsjfsdjf bhdfbjws dfjsdbf hsd fsdbfsdbf sduhsfdjbf sd s
          </Tabs.Panel>

          <Tabs.Panel value="Assets">
            assets
          </Tabs.Panel>

          <Tabs.Panel value="Bank Holdings">
            banks
          </Tabs.Panel>

          <Tabs.Panel value="Stocks">
            <StockList stocksList={stocksList}/>
          </Tabs.Panel>

          <Tabs.Panel value="Donations">
            donations
          </Tabs.Panel>

        </Tabs>
      </div>

      <Button variant="filled" onClick={incrementYear} >Increment Year</Button> space 
      <Button variant="filled" onClick={resetAllValues} >Reset All Values</Button>
    </div>
    </>
  );
}
