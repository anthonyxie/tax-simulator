"use client";

import { Welcome } from '../../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { GridLayout } from '@/components/GridLayout/GridLayout';
import { FloatingLabelInput } from '@/components/FloatingLabel/FloatingLabel';
import { SliderInput } from '@/components/SliderInput/SliderInput';
import { CSSProperties, useEffect, useState } from 'react';
import { ActionIcon, Button, NumberInput, Progress, Tabs, Tooltip } from '@mantine/core';
import StockItem from '@/components/StockItem/StockItem';
import StockList from '@/components/StockList/StockList';
import '../../resources/stylesheet.css';
import clientImg from '../../public/richClient.png';
import { Stock, Asset, Property, BankAccount, listOfStocks, listOfDonations, listOfArts, listOfAccounts, Art } from '@/models/stock';
import RiskBar from '@/components/RiskBar/RiskBar';
import ArtList from '@/components/ArtList/ArtList';
import DonationList from '@/components/DonationList/DonationList';
import BankAccountList from '@/components/BankAccountList/BankAccountList';
import ArtCarousel from '@/components/ArtCarousel/ArtCarousel';

export default function HomePage() {
 
  const [netWorth, setNetWorth] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(1000000);
  const [stocks, setStocks] = useState<Stock[]>(listOfStocks);
  const [taxAmount, setTaxAmount] = useState(0);
  const [properties, setProperties] = useState({});
  const [risk, setRisk] = useState(20);
  const [arts, setArts] = useState<Art[]>(listOfArts);
  const [accounts, setAccounts] = useState<BankAccount[]>(listOfAccounts)
  const [reportedIncome, setReportedIncome] = useState<number>(1000000)
  const [liquidFunds, setLiquidFunds] = useState(0);

  const liquidFundsGoal = 450000;

  function incrementYear(event: { preventDefault: () => void; }): any {
    event.preventDefault();

    let joemama = netWorth;
    let poggers = joemama + yearlyIncome;
    setYearlyIncome(yearlyIncome * 1.1);
    setNetWorth(poggers);
  }

  function sellStock(index: number, amountSold: number): any {
    console.log("stock sold");
    let stockList = stocks.slice();
    let soldStock = stockList[index];
    if (soldStock.amount >= amountSold) {
      soldStock.amount -= amountSold;
      let newFundAmount = liquidFunds;
      let profit = amountSold * soldStock.price
      newFundAmount += profit
      stockList[index] = soldStock;
      let newtaxAmount = taxAmount;
      newtaxAmount += profit * 0.1
      setTaxAmount(newtaxAmount);
      setStocks(stockList);
      setLiquidFunds(newFundAmount);
    }
  }

  function donateArt(index: number): any {
    let artsList = arts.slice();
    let oldArt = artsList[index]
    if (oldArt.priceIndex) {
      let oldPrice = oldArt.prices[oldArt.priceIndex]
      let newtaxAmount = taxAmount;
      newtaxAmount -= oldPrice * 0.3
      artsList.splice(index, 1);
      setTaxAmount(newtaxAmount);
      setArts(artsList);
    }
  }

  function resetAllValues(event: { preventDefault: () => void; }): any {
    event.preventDefault();
    setNetWorth(0);
    setYearlyIncome(100000);
  }

  function editArt(art: Art, index: number): any {
    console.log("wow");
    let artList = arts.slice();
    artList[index] = art;
    setArts(artList);
  }

  useEffect(() => {
    setTaxAmount(reportedIncome * 0.4);
  }, [reportedIncome]);

  useEffect(() => {
    console.log(arts);
  }, [arts])

  return (
    <>
    <div id="portfolioDiv">
      <text id="header1">Y0 Portfolio</text>

      <div className="flexRow" id="client">
        <div id="rightHalf">
          <img id="clientImage" src={"/richClient.png"} alt="Brown haired young woman with money"/>
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
                <text>Liquid Funds:</text>
                <Progress.Root size={20}>
                    <Progress.Section value={(liquidFunds / liquidFundsGoal) * 100} color="blue">
                    </Progress.Section>
                </Progress.Root>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div id='tabbedMenu'>
          <Tabs defaultValue="Properties" color='yellow' >
          <Tabs.List grow>
            <Tabs.Tab value="Properties">
              Properties
            </Tabs.Tab>
            <Tabs.Tab value="Donable Assets">
              Donable Assets
            </Tabs.Tab>
            <Tabs.Tab value="Bank Holdings">
              Bank Holdings
            </Tabs.Tab>
            <Tabs.Tab value="Stocks">
              Stocks
            </Tabs.Tab>
            <Tabs.Tab value="Charity Donations">
              Charity Donations
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Properties">
            properties
          </Tabs.Panel>

          <Tabs.Panel value="Donable Assets">
            {<ArtList donateArt={donateArt} artsList={arts} editArt={editArt}/>}
            {/*<ArtCarousel artsList={listOfArts} />*/}
          </Tabs.Panel>

          <Tabs.Panel value="Bank Holdings">
            {<BankAccountList accountsList={listOfAccounts}/>}
          </Tabs.Panel>

          <Tabs.Panel value="Stocks">
            <StockList sellStock={sellStock} stocksList={listOfStocks}/>
          </Tabs.Panel>

          <Tabs.Panel value="Charity Donations">
            <DonationList donationList={listOfDonations}/>
          </Tabs.Panel>

        </Tabs>
      </div>
      
      <div className='flexRow' id="reportIncome">
        <NumberInput
          label={"How much income would you like to report?"}
          placeholder={"Write down how much income you're reporting"}
          min={0}
          step={yearlyIncome / 20}
          max={yearlyIncome}
          defaultValue={yearlyIncome}
          value={reportedIncome}
          prefix='$'
          decimalScale={2}
          onChange={(value) => setReportedIncome(Number(value))}
          />
          <Button id="reportButton" variant="filled" onClick={incrementYear} ><text id="reportBttnTxt">File Taxes!</text></Button>
      </div>
    </div>
    </>
  );
}
