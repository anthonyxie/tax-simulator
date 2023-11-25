'use client';
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";
import { BankAccount } from "@/models/stock";

interface BankAccountItemProps {
    account: BankAccount;
}

export default function BankAccountItem({ account }: BankAccountItemProps) {
    return (
        <div className="listItemDiv" id="bankAccountItemDiv">
            <div style={{ width: '25%' }}><text>{account.name}</text></div>
            <div style={{ width: '25%' }}><text>${account.amount}</text></div>
            <div style={{ width: '25%' }}><text>{account.APY}%</text></div>
            <div style={{ width: '25%' }}><text>{account.country}</text></div>
            {/* need to add feature to create offshore accounts */}
        </div>
    )
}