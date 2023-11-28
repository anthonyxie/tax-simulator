'use client';

import '../../resources/stylesheet.css';
import { BankAccount } from '@/models/stock';

interface BankAccountItemProps {
    account: BankAccount;
}

export default function BankAccountItem({ account }: BankAccountItemProps) {
    return (
        <div className="listItemDiv" id="bankAccountItemDiv">
            <div style={{ width: '25%' }}><text>{account.name}</text></div>
            <div style={{ width: '25%' }}><text>${account.amount}</text></div>
            <div style={{ width: '25%' }}><text>${Math.round(account.amount * account.APY * 0.01)}</text></div>
            <div style={{ width: '25%' }}><text>{account.country}</text></div>
        </div>
    );
}
