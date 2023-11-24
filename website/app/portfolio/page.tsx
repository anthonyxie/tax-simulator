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
import { Stock, Asset, Property, listOfStocks, listOfDonations, listOfArts } from '@/models/stock';
import RiskBar from '@/components/RiskBar/RiskBar';
import ArtList from '@/components/ArtList/ArtList';
import DonationList from '@/components/DonationList/DonationList';
import ArtCarousel from '@/components/ArtCarousel/ArtCarousel';

export default function HomePage() {
 
  const [netWorth, setNetWorth] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(100000);
  const [stocks, setStocks] = useState<any>(listOfStocks);
  const [taxAmount, setTaxAmount] = useState(0);
  const [properties, setProperties] = useState({});
  const [risk, setRisk] = useState(20);
  const [reportedIncome, setReportedIncome] = useState<number>(100000)
  
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

  useEffect(() => {
    setTaxAmount(reportedIncome * 0.4);
  }, [reportedIncome, stocks, properties])

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
            {/* <ArtList artsList={listOfArts}/> */}
            <ArtCarousel artsList={listOfArts} />
          </Tabs.Panel>

          <Tabs.Panel value="Bank Holdings">
            banks
          </Tabs.Panel>

          <Tabs.Panel value="Stocks">
            <StockList stocksList={listOfStocks}/>
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
