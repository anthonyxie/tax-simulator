"use client";
import { Welcome } from '../../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { GridLayout } from '@/components/GridLayout/GridLayout';
import { FloatingLabelInput } from '@/components/FloatingLabel/FloatingLabel';
import { SliderInput } from '@/components/SliderInput/SliderInput';
import { CSSProperties, useEffect, useState } from 'react';
import StocksList from '@/components/Accordion/StocksList';
import { ActionIcon, Button, NumberInput, Progress, Tabs, Tooltip } from '@mantine/core';
import StockItem from '@/components/StockItem/StockItem';
import StockList from '@/components/StockList/StockList';
import '../../resources/stylesheet.css';
import { Image } from '@mantine/core';
import clientImg from '../../public/richClient.png';
import NextImage from 'next/image';
import { Stock, Asset, Property, listOfStocks } from '@/models/stock';
import RiskBar from '@/components/RiskBar/RiskBar';

export default function HomePage() {
 

 
  const [netWorth, setNetWorth] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(100000);
  const [stocks, setStocks] = useState<any>({});
  const [taxAmount, setTaxAmount] = useState(0);
  const [properties, setProperties] = useState({});
  const [risk, setRisk] = useState(20);
  const [reportedIncome, setReportedIncome] = useState(100000)
  
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
    if (tick in newStocks) {
      newStocks[tick] += 1;
    }
    else {
      newStocks[tick] = 1;
    }
    setStocks(newStocks);
  }

  useEffect(() => {
    setTaxAmount(yearlyIncome * 0.4);
  }, [yearlyIncome, stocks, properties])

  return (
    <>
    <div>
      <text id="header1">Y0 Portfolio</text>

      <div className="flexRow" id="client">
        <div id="rightHalf">
            <div><Image component={NextImage} id="clientImage" src={clientImg} alt="Brown haired young woman with money"/></div>
        </div>
        {/* ^takes half and \/ takes half */}
        <div className='flexCol' id="clientInfo">
          <text id="clientName">Jane Client Doe</text>
          <div className='flexRow' id="clientDetails">
            <div className='flexCol'>
              <text>Net worth: </text>
              <text>Yearly income: </text>
              <text>Projected Taxes: </text>
            </div>
            <div className='flexCol' id="clientNums">
              <text>{netWorth}</text>
              <text>{yearlyIncome}</text>
              <text>{taxAmount}</text>
            </div>
          </div>
          <div className="flexColAligned">
            <div className="riskBars">
                <text>Taxed Income:</text>
                  <RiskBar incomeAmount={yearlyIncome} taxAmount={taxAmount}/>
                <text>Risk:</text>
                <Progress.Root size={20}>
                    <Progress.Section value={risk} color="red">
                    </Progress.Section>
                </Progress.Root>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div id='tabbedMenu'>
          <Tabs defaultValue="Properties" color='taupe' >
          <Tabs.List grow>
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
            and stuff fbdjskfbkjsdfb nkjdnfjkdsfjksdf jkdnfs jkdf dsf skj hf dsjfsdjf bhdfb jws dfjsdbf hsd fsdbfsdbf sduh sfdjbf sd s
          </Tabs.Panel>

          <Tabs.Panel value="Assets">
            assets
          </Tabs.Panel>

          <Tabs.Panel value="Bank Holdings">
            banks
          </Tabs.Panel>

          <Tabs.Panel value="Stocks">
            <StockList stocksList={listOfStocks}/>
          </Tabs.Panel>

          <Tabs.Panel value="Donations">
            donations
          </Tabs.Panel>

        </Tabs>
      </div>
      <div className="reportIncome">
      <NumberInput
      label={"How much income would you like to report?"}
      placeholder={"Write down how much income you're reporting"}
      min={0}
      step={yearlyIncome / 20}
      max={yearlyIncome}
      defaultValue={yearlyIncome}
      />
      </div>
      <Button variant="filled" onClick={incrementYear} >Increment Year</Button> space 
      <Button variant="filled" onClick={resetAllValues} >Reset All Values</Button>
    </div>
    </>
  );
}
