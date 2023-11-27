'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, NumberInput, Progress, Tabs, Tooltip, RingProgress, Text } from '@mantine/core';
import StockList from '@/components/StockList/StockList';
import '../../resources/stylesheet.css';
import { Stock, Asset, Property, BankAccount, listOfStocks, listOfDonations, listOfArts, listOfAccounts, listOfProperties, Art } from '@/models/stock';
import RiskBar from '@/components/RiskBar/RiskBar';
import DonationList from '@/components/DonationList/DonationList';
import BankAccountList from '@/components/BankAccountList/BankAccountList';
import ArtAssets from '@/components/ArtAssets/ArtAssets';
import PropertyList from '@/components/PropertyList/PropertyList';

export default function HomePage() {
  const [netWorth, setNetWorth] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(1000000);
  const [stocks, setStocks] = useState<Stock[]>(listOfStocks);
  const [taxAmount, setTaxAmount] = useState(0);
  const [incomeTaxAmount, setIncomeTaxAmount] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const [capitalGainsTaxAmount, setCapitalGainsTaxAmount] = useState(0);
  const [propertyTaxAmount, setPropertyTaxAmount] = useState(0);
  const [properties, setProperties] = useState<Property[]>(listOfProperties);
  const [risk, setRisk] = useState(0);
  const [reportingRisk, setReportingRisk] = useState(0);
  const [arts, setArts] = useState<Art[]>(listOfArts);
  const [accounts, setAccounts] = useState<BankAccount[]>(listOfAccounts);
  const [reportedIncome, setReportedIncome] = useState<number>(1000000);
  const [liquidFunds, setLiquidFunds] = useState(0);

  const [taxWriteOffs, setTaxWriteOffs] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);

  const liquidFundsGoal = 450000;
  const initialTaxAmount = 40000;

  function sellStock(index: number, amountSold: number): any {
    console.log('stock sold');
    const stockList = stocks.slice();
    const soldStock = stockList[index];
    if (soldStock.amount >= amountSold) {
      soldStock.amount -= amountSold;
      let newFundAmount = liquidFunds;
      const profit = amountSold * soldStock.price;
      newFundAmount += profit;
      stockList[index] = soldStock;

      let newtaxAmount = capitalGainsTaxAmount;
      newtaxAmount += profit * 0.1;
      setCapitalGainsTaxAmount(newtaxAmount);

      setStocks(stockList);
      setLiquidFunds(newFundAmount);
    }
  }

  function donateArt(index: number): any {
    const artsList = arts.slice();
    const oldArt = artsList[index];
    if (oldArt.appraised) {
      let oldPrice = oldArt.prices[oldArt.priceIndex];
      let newtaxAmount = taxWriteOffs;
      newtaxAmount += oldPrice * 0.4;
      console.log(newtaxAmount);
      artsList.splice(index, 1);
      
      setTaxWriteOffs(newtaxAmount);
      setArts(artsList);
    }
  }

  function makeDonation(index: number, amount: number) {
    let donation = listOfDonations[index];
    if (liquidFunds >= amount) {
      //reduce liquid funds
      let newliquidFunds = liquidFunds;
      newliquidFunds -= amount * donation.returnFactor;
      setLiquidFunds(newliquidFunds);
      
      //reduce tax amount
      let newtaxAmount = taxWriteOffs;
      newtaxAmount += amount * 0.4;
      setTaxWriteOffs(newtaxAmount);

      //increase risk
      let riskAmount = risk;
      riskAmount += amount * donation.riskFactor * 0.001;
      setRisk(riskAmount);
      
    }
  }

  useEffect(() => {
    let taxTotal = 0;
    taxTotal += incomeTax;
    taxTotal -= Math.min(incomeTax * 0.4, taxWriteOffs);
    setIncomeTaxAmount(taxTotal);

  }, [taxWriteOffs, incomeTax]);


  function sellArt(index: number): any {
    const artsList = arts.slice();
    const oldArt = artsList[index];
    console.log('whaaaaa');
    if (oldArt.appraised) {
      const oldPrice = oldArt.prices[oldArt.priceIndex];
      let newliquidFunds = liquidFunds;
      newliquidFunds += oldPrice;

      let newtaxAmount = taxAmount;
      newtaxAmount += oldPrice * 0.15;

      artsList.splice(index, 1);
      setTaxAmount(newtaxAmount);
      setLiquidFunds(newliquidFunds);
      setArts(artsList);
    }
  }

  function resetAllValues(event: { preventDefault: () => void; }): any {
    event.preventDefault();
    setNetWorth(0);
    setYearlyIncome(100000);
  }

  function editArt(art: Art, index: number): any {
    console.log('wow');
    const artList = arts.slice();
    artList[index] = art;
    setArts(artList);
  }

  // eslint-disable-next-line max-len
  function addAccount(newAccount: BankAccount, divertedAccount: BankAccount, divertedIndex: number): any {
    const newAccounts = accounts.slice();
    newAccounts[divertedIndex] = divertedAccount;
    newAccounts.push(newAccount);
    setAccounts(newAccounts);
  }

  useEffect(() => {
    setIncomeTax(reportedIncome * 0.4);
  }, [reportedIncome]);

  useEffect(() => {
    let taxTotal = 0;
    [incomeTaxAmount, propertyTaxAmount, capitalGainsTaxAmount].map((value) => {
      taxTotal += value;
    });
    setTaxAmount(taxTotal);
  }, [incomeTaxAmount, propertyTaxAmount, capitalGainsTaxAmount])

  useEffect(() => {
    let riskTotal = 0;
    [reportingRisk].map((value) => {
      riskTotal += value;
    });
    setRisk(riskTotal);
  }, [reportingRisk]);

  useEffect(() => {
    const amountOff = reportedIncome / yearlyIncome;
    let taxRisk = 0;
    if (amountOff < 1) {
      taxRisk += 15;
      if (amountOff < 0.2) {
        taxRisk += 75;
      } else if (amountOff < 0.4) {
          taxRisk += 65;
      } else if (amountOff < 0.6) {
          taxRisk += 55;
      } else if (amountOff < 0.8) {
          taxRisk += 35;
      } else if (amountOff < 0.9) {
          taxRisk += 20;
      }
    }
    setReportingRisk(taxRisk);
  }, [reportedIncome]);

  useEffect(() => {
    console.log(arts);
  }, [arts]);

  return (
    <>
    <div id="portfolioDiv">
      <text id="header1">Y0 Portfolio</text>

      <div className="flexRow" id="client">
        <div id="rightHalf">
          <img id="clientImage" src="/richClient.png" alt="Brown haired young woman with money" />
        </div>
        {/* ^takes half and \/ takes half */}
        <div className="flexCol" id="clientInfo">

          <div className="flexRow" id="cInfoDiv">
            <div className="flexCol" id="cInfoDivTxt">
              <text id="clientName">Jane Client Doe</text>

              <div className="flexRow" id="clientDetails">
                <div className="flexCol">
                  <text>Yearly income: </text>
                  <text>Projected Taxes: </text>
                </div>

                <div className="flexCol" id="clientNums">
                  <text>${yearlyIncome}</text>
                  <text>${taxAmount}</text>
                </div>
              </div>

            </div>

            {/* TO-DO: put real value variable in the value section and in the tooltip */}
            <div id="ringDiv">
              <RingProgress
                label={<Text size="xs" ta="center">Tax Breakdown</Text>}
                sections={[
                  { tooltip: 'Income Tax', value: (incomeTaxAmount / taxAmount) * 100, color: 'blue' },
                  { tooltip: 'Capital Gains Tax', value: (capitalGainsTaxAmount / taxAmount) * 100, color: 'orange' },
                  { tooltip: 'Property Tax', value: (propertyTaxAmount / taxAmount) * 100, color: 'grape' },
                ]}
              />
            </div>
          </div>

          <div className="riskBars">
                <RiskBar incomeAmount={yearlyIncome} taxAmount={taxAmount} />
                <Progress.Root size={20}>
                    { risk < 0.10 ? (
                    <Progress.Label>Risk</Progress.Label>
                  ) : (
                    <Progress.Section value={risk} color="red">
                      <Progress.Label>Risk</Progress.Label>
                    </Progress.Section>
                  )}
                </Progress.Root>
                {/* need conditional to make label appear properly */}
                <Progress.Root size={20}>
                  { liquidFunds / liquidFundsGoal < 0.12 ? (
                    <Progress.Label>Liquid Funds</Progress.Label>
                  ) : (
                    <Progress.Section value={(liquidFunds / liquidFundsGoal) * 100} color="blue">
                      <Progress.Label>Liquid Funds</Progress.Label>
                    </Progress.Section>
                  )}
                </Progress.Root>
          </div>
        </div>
      </div>

      <div id="tabbedMenu">
          <Tabs defaultValue="Properties" color="yellow">
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
                <Tabs.Tab value="Reporting Income">
                  Income Reporting
                </Tabs.Tab>
                <Tabs.Tab value="Loans">
                  Loans
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Properties">
              <PropertyList propertiesList={properties} />
              </Tabs.Panel>

              <Tabs.Panel value="Donable Assets">
                {/* <ArtList donateArt={donateArt} artsList={arts} editArt={editArt} /> */}
                {/* <ArtCarousel donateArt={donateArt} artsList={arts} editArt={editArt} /> */}
                <ArtAssets donateArt={donateArt} artsList={arts} editArt={editArt} sellArt={sellArt} />
              </Tabs.Panel>

              <Tabs.Panel value="Bank Holdings">
                <BankAccountList addAccount={addAccount} accountsList={accounts} />
              </Tabs.Panel>

              <Tabs.Panel value="Stocks">
                <StockList sellStock={sellStock} stocksList={listOfStocks} />
              </Tabs.Panel>

              <Tabs.Panel value="Charity Donations">
                <DonationList donationList={listOfDonations} />
              </Tabs.Panel>

              <Tabs.Panel value="Loans">
                  i'm a loan c:
              </Tabs.Panel>

            <Tabs.Panel value="Reporting Income">
              <NumberInput
                allowNegative={false}
                label="How much income would you like to report?"
                placeholder={"Write down how much income you're reporting"}
                min={0}
                step={yearlyIncome / 20}
                max={yearlyIncome}
                defaultValue={yearlyIncome}
                value={reportedIncome}
                prefix="$"
                decimalScale={2}
                onChange={(value) => setReportedIncome(Number(value))}
              />
            </Tabs.Panel>

          </Tabs>
      </div>

      <div className="flexRow" id="reportIncome">
          <Button variant='filled' id="reportButton"><Link href={{ pathname: '/feedback', query: { amount: initialTaxAmount - taxAmount }}}><text id="reportBttnTxt">File Taxes!</text></Link></Button>
      </div>
    </div>
    </>
  );
}
