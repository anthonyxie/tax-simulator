'use client';

import { Button, NumberInput } from "@mantine/core";

interface loanProps {
    loanAmount: number,
    setLoanAmount: any,
    setCollateral: any,
    stockList: any,
    makeLoan: any,
}
export default function Loan({loanAmount, setLoanAmount, setCollateral, stockList, makeLoan}: loanProps)  {


    return (
        <div>
            <NumberInput
            label="How much would you like to loan?"
            placeholder={"How much would you like to loan?"}
            min={0}
            max={1000000}
            step={10000}
            defaultValue={0}
            value={loanAmount}
            prefix="$"
            decimalScale={2}
            onChange={(value) => setLoanAmount(Number(value))}
            />
            <Button onClick={makeLoan}>Apply for Loan</Button>
        </div>
    );
}