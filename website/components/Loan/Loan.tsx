'use client';

import { Button, NumberInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Stock } from '@/models/stock';
import CollateralItem from './CollateralItem';

interface loanProps {
    loanAmount: number,
    setLoanAmount: any,
    setCollateral: any,
    stockList: Stock[],
    makeLoan: any,
    totalLoan: any,
}
// eslint-disable-next-line max-len
export default function Loan({ loanAmount, setLoanAmount, setCollateral, stockList, makeLoan, totalLoan }: loanProps) {
    const [disabledIndexes, setDisableIndexes] = useState<number[]>([]);
    const [collatVal, setCollatVal] = useState<number>(0);

    function loan() {
        setCollateral(disabledIndexes);
        makeLoan();
    }

    function setDisabled(index: number, bool: boolean) {
        const disIndexes = disabledIndexes.slice();
        if (index in disIndexes && bool === false) {
            disIndexes.splice(disIndexes.indexOf(index), 1);
        } else if (bool) {
            disIndexes.push(index);
        }

        setDisableIndexes(disIndexes);
    }

    useEffect(() => {
        let collatValue = 0;
        disabledIndexes.map((ind, index) => {
            collatValue += stockList[ind].amount * stockList[ind].price;
        });
        setCollatVal(collatValue);
    }, [disabledIndexes]);

    return (
        <div>
            <NumberInput
              label="How much would you like to loan?"
              placeholder="How much would you like to loan?"
              min={0}
              max={1000000}
              step={10000}
              defaultValue={0}
              value={loanAmount}
              prefix="$"
              decimalScale={2}
              onChange={(value) => setLoanAmount(Number(value))}
            />
            <br />
            <text>Place collateral on your loan:</text>
            {stockList.map((stock, index) => (
                <CollateralItem key={index} stock={stock} index={index} setDisabled={setDisabled} />
            ))}
            <div className="flexRow" id="loanRow">
                <text>Collateral value: ${collatVal}</text>
                <text>Total Amount Loaned: ${totalLoan}</text>
                <Button id="loanBttn" color="copper" onClick={loan} disabled={loanAmount === 0}>Apply for Loan</Button>
            </div>
        </div>
    );
}
