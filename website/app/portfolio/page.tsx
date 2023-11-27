'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, NumberInput, Progress, Tabs, Tooltip, RingProgress, Text } from '@mantine/core';
import StockList from '@/components/StockList/StockList';
import '../../resources/stylesheet.css';
import { Stock, Asset, Property, BankAccount, listOfStocks, listOfDonations, listOfArts, listOfAccounts, listOfProperties, Art} from '@/models/stock';
import RiskBar from '@/components/RiskBar/RiskBar';
import DonationList from '@/components/DonationList/DonationList';
import BankAccountList from '@/components/BankAccountList/BankAccountList';
import ArtAssets from '@/components/ArtAssets/ArtAssets';
import PropertyList from '@/components/PropertyList/PropertyList';
import Loan from '@/components/Loan/Loan';

export default function HomePage() {
  const [netWorth, setNetWorth] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(1000000);
  const [yearlySalary, setYearlySalary] = useState(871340);
  const [bankIncome, setBankIncome] = useState(0);
  const [reportedIncome, setReportedIncome] = useState<number>(871340);
  const [reportedBankIncome, setReportedBankIncome] = useState(0);

  const [stocks, setStocks] = useState<Stock[]>(listOfStocks);
  const [properties, setProperties] = useState<Property[]>(listOfProperties);
  const [arts, setArts] = useState<Art[]>(listOfArts);
  const [accounts, setAccounts] = useState<BankAccount[]>(listOfAccounts);
  
  const [taxAmount, setTaxAmount] = useState(0);
  const [incomeTaxAmount, setIncomeTaxAmount] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const [capitalGainsTaxAmount, setCapitalGainsTaxAmount] = useState(0);
  const [propertyTaxAmount, setPropertyTaxAmount] = useState(0);
  const [taxWriteOffs, setTaxWriteOffs] = useState(0);


  const [risk, setRisk] = useState(0);
  const [reportingRisk, setReportingRisk] = useState(0);
  const [bankReportingRisk, setBankReportingRisk] = useState(0);
  const [donatingRisk, setDonationRisk] = useState(0);

  const [liquidFunds, setLiquidFunds] = useState(0);

  const [loanAmount, setLoanAmount] = useState(0);
  const [loanCollateral, setLoanCollateral] = useState([]);

  const liquidFundsGoal = 450000;
  const initialTaxAmount = 479000;

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

  useEffect(() => {
    let newbankIncome = 0;
    accounts.map((account) => {
      newbankIncome+= Math.round(account.amount * account.APY * 0.01);
    });
    setBankIncome(newbankIncome);

  }, [accounts, bankIncome])

  useEffect(() => {
    let newbankIncome = 0;
    accounts.map((account) => {
      if (account.country == "U.S.") {
        newbankIncome += Math.round(account.amount * account.APY * 0.01);
      }
    });
    setReportedBankIncome(newbankIncome);
  }, [accounts, reportedBankIncome])

  function donateArt(index: number): any {
    const artsList = arts.slice();
    const oldArt = artsList[index];
    if (oldArt.appraised) {
      let oldPrice = oldArt.prices[oldArt.priceIndex];
      let priceIndex = oldArt.priceIndex;
      let newtaxAmount = taxWriteOffs;
      newtaxAmount += oldPrice * 0.4;

      let donoRisk = 0;
      if (priceIndex == 0) {
        donoRisk = 0;
      }
      else if (priceIndex == 1) {
        donoRisk = 2;
      }
      else if (priceIndex == 2) {
        donoRisk = 5
      }

      let donationRisk = donatingRisk + donoRisk;
      console.log(donationRisk + donoRisk);
      setDonationRisk(donationRisk + donoRisk);
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

  function makeLoan() {
    let newliquidFunds = liquidFunds + loanAmount;
    setLiquidFunds(newliquidFunds);
    setLoanAmount(0);
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
    // Resetting numerical states
    setNetWorth(0);
    setYearlyIncome(1000000);
    setYearlySalary(871340);
    setBankIncome(0);
    setReportedIncome(871340);
    setReportedBankIncome(0);

    setLiquidFunds(0);
    setLoanAmount(0);
    setLoanCollateral([]);

    setTaxAmount(0);
    setIncomeTaxAmount(0);
    setIncomeTax(0);
    setCapitalGainsTaxAmount(0);
    setPropertyTaxAmount(0);
    setTaxWriteOffs(0);

    setRisk(0);
    setReportingRisk(0);
    setBankReportingRisk(0);
    setDonationRisk(0);

    // Resetting array states
    setStocks(listOfStocks);
    setProperties(listOfProperties);
    setArts(listOfArts);
    setAccounts(listOfAccounts);
  }

// Other functions and JSX remain unchanged

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
    setIncomeTax(reportedIncome * 0.4 + reportedBankIncome * 0.4);
  }, [reportedIncome, reportedBankIncome, incomeTax]);

  useEffect(() => {
    let taxTotal = 0;
    [incomeTaxAmount, propertyTaxAmount, capitalGainsTaxAmount].map((value) => {
      taxTotal += value;
    });
    setTaxAmount(taxTotal);
  }, [incomeTaxAmount, propertyTaxAmount, capitalGainsTaxAmount, taxAmount])

  useEffect(() => {
    let riskTotal = 0;
    [reportingRisk, donatingRisk, bankReportingRisk].map((value) => {
      riskTotal += value;
    });
    setRisk(riskTotal);
  }, [reportingRisk, donatingRisk, bankReportingRisk, risk]);

  useEffect(() => {
    const amountOff = reportedIncome / yearlySalary;
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
  }, [reportedIncome, reportingRisk]);

  useEffect(() => {
    const amountOff = reportedBankIncome / bankIncome;
    let taxRisk = 0;
    if (amountOff < 1) {
      taxRisk += 5;
      if (amountOff < 0.2) {
        taxRisk += 30;
      } else if (amountOff < 0.4) {
          taxRisk += 20;
      } else if (amountOff < 0.6) {
          taxRisk += 10;
      } else if (amountOff < 0.8) {
          taxRisk += 3;
      } else if (amountOff < 0.9) {
          taxRisk += 2;
      }
    }
    setBankReportingRisk(taxRisk);
  }, [reportedBankIncome, bankReportingRisk]);

  useEffect(() => {
    console.log(arts);
  }, [arts]);

  useEffect(() => {
    let propTaxAmt = 0;
    properties.map((property) => {
      propTaxAmt += property.value * 0.01;
    });
    setPropertyTaxAmount(propTaxAmt);
  }, [properties, propertyTaxAmount]);

  return (
    <>
    <div id="portfolioDiv">
      <div id="headerDiv">
        <text id="header1">Y0 Portfolio</text>
      </div>

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
                  <text>Total Reported Income: </text>
                  <text>Projected Taxes: </text>
                </div>

                <div className="flexCol" id="clientNums">
                  <text>${yearlyIncome}</text>
                  <text>${reportedBankIncome + reportedIncome}</text>
                  <text>${taxAmount}</text>
                </div>
              </div>

            </div>

            {/* TO-DO: put real value variable in the value section and in the tooltip */}
            <div id="ringDiv">
              <RingProgress
                label={<Text size="xs" ta="center">Tax Breakdown</Text>}
                sections={[
                  { tooltip: `Income Tax: $${incomeTaxAmount}`, value: (incomeTaxAmount / taxAmount) * 100, color: 'blue' },
                  { tooltip: `Capital Gains Tax: $${capitalGainsTaxAmount}`, value: (capitalGainsTaxAmount / taxAmount) * 100, color: 'orange' },
                  { tooltip: `Property Tax: $${propertyTaxAmount}`, value: (propertyTaxAmount / taxAmount) * 100, color: 'grape' },
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
                <Tabs.Tab value="Reporting Salary">
                  Salary Reporting
                </Tabs.Tab>
                <Tabs.Tab value="Loans">
                  Loans
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Properties">
              <PropertyList propertiesList={properties} />
              </Tabs.Panel>

              <Tabs.Panel value="Donable Assets">
                <ArtAssets donateArt={donateArt} artsList={arts} editArt={editArt} sellArt={sellArt} />
              </Tabs.Panel>

              <Tabs.Panel value="Bank Holdings">
                <BankAccountList addAccount={addAccount} accountsList={accounts} />
              </Tabs.Panel>

              <Tabs.Panel value="Stocks">
                <StockList sellStock={sellStock} stocksList={listOfStocks} />
              </Tabs.Panel>

              <Tabs.Panel value="Charity Donations">
                <DonationList makeDonation={makeDonation} liquidFunds={liquidFunds} donationList={listOfDonations} />
              </Tabs.Panel>

              <Tabs.Panel value="Loans">
                  <Loan makeLoan={makeLoan} setCollateral={setLoanCollateral} stockList={stocks} loanAmount={loanAmount} setLoanAmount={setLoanAmount}/>
              </Tabs.Panel>

            <Tabs.Panel value="Reporting Salary">
              <NumberInput
                allowNegative={false}
                label="How much of your salary would you like to report?"
                placeholder={"Write down how much salary you're reporting"}
                min={0}
                step={yearlySalary / 20}
                max={yearlySalary}
                defaultValue={yearlySalary}
                value={reportedIncome}
                prefix="$"
                decimalScale={2}
                onChange={(value) => setReportedIncome(Number(value))}
              />
            </Tabs.Panel>

          </Tabs>
      </div>

      <div id="fileTaxesBttn">
          <Link id="fileLink" href={{ pathname: '/feedback', query: { amount: initialTaxAmount - taxAmount }}}><text id="reportBttnTxt">File Taxes!</text></Link>
      </div>
      <button id="resetBttn" onClick={resetAllValues}><text>Reset Game</text></button>
    </div>
    </>
  );
}
