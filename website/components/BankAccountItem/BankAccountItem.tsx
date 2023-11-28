'use client';

import '../../resources/stylesheet.css';
import { Divider } from '@mantine/core';
import { BankAccount } from '@/models/stock';

interface BankAccountItemProps {
    account: BankAccount;
}

export default function BankAccountItem({ account }: BankAccountItemProps) {
    return (
        <div className="listItemDiv" id="bankAccountItemDiv">
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={account.name} labelPosition="left" color="black" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={`$${account.amount}`} labelPosition="left" color="black" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={`$${String(Math.round(account.amount * account.APY * 0.01))}`} labelPosition="left" color="black" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={account.country} labelPosition="left" color="black" />
        </div>
    );
}
