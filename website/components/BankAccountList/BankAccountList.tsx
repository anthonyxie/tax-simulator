'use client';

import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal, NumberInput, Select } from '@mantine/core';
import BankAccountItem from '../BankAccountItem/BankAccountItem';
import '../../resources/stylesheet.css';
import { BankAccount, Country } from '@/models/stock';

interface AccountListProps {
    countryList: Country[],
    accountsList: BankAccount[],
    addAccount: any,
}

// eslint-disable-next-line max-len
export default function BankAccountList({ countryList, accountsList, addAccount }: AccountListProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const [divertedAccount, setDivertedAccount] = useState<string | null>('');
    const [usedAccountIndex, setUsedAccountIndex] = useState(0);
    const [amountMoved, setAmountMoved] = useState(0);
    const [divertedCountry, setDivertedCountry] = useState<string | null>('');
    const [divertedIndex, setDivertedIndex] = useState(0);
    const [countries, setCountries] = useState<any[]>(countryList);

    useEffect(() => {
        let i = 0;
        accountsList.forEach((account, index) => {
            if (account.name === divertedAccount) {
                i = index;
            }
        });
        setUsedAccountIndex(i);
    }, [divertedAccount]);

    useEffect(() => {
        let i = 0;
        countries.forEach((account, index) => {
            if (account.country === divertedCountry) {
                i = index;
            }
        });
        setDivertedIndex(i);
    }, [divertedCountry]);

    useEffect(() => {
        console.log(divertedAccount);
    }, [divertedAccount]);

    function createAccount() {
        const newAccount = {
            name: countries[divertedIndex].bankNames[0],
            country: divertedCountry,
            amount: amountMoved,
            APY: 0.5,
        };
        const divertAccount = { ...accountsList[usedAccountIndex] };
        divertAccount.amount -= amountMoved;
        const uaIndex = usedAccountIndex;
        const eachCountry = countries.slice();
        eachCountry.splice(divertedIndex, 1);
        addAccount(newAccount, divertAccount, uaIndex);
        setCountries(eachCountry);
        close();
    }

    return (
        <div>
            <Modal opened={opened} onClose={close} centered>
            <Select
              label="Divert funds from which account"
              placeholder="Pick value"
              data={accountsList.map((account, index) => account.name)}
              value={divertedAccount}
              onChange={(value) => setDivertedAccount(value)}
            />
            <NumberInput
              label={`Move how much from this account? Max: ${accountsList[usedAccountIndex].amount}`}
              placeholder="Move how much from this account?"
              min={0}
              step={accountsList[usedAccountIndex].amount / 20}
              max={accountsList[usedAccountIndex].amount}
              defaultValue={0}
              value={amountMoved}
              prefix="$"
              decimalScale={2}
              onChange={(value) => setAmountMoved(Number(value))}
            />
            <Select
              label="Account Location"
              placeholder="Pick value"
              data={countries.map((country, index) => country.country)}
              value={divertedCountry}
              onChange={(value) => setDivertedCountry(value)}
            />

            <Button onClick={createAccount}>Create New Holdings Account</Button>
            </Modal>
            <text className="panelHeader">Accounts</text>
            <div id="bankAccountHeader">
                <div style={{ width: '25%' }}><text>Name</text></div>
                <div style={{ width: '25%' }}><text>Amount</text></div>
                <div style={{ width: '25%' }}><text>Returns</text></div>
                <div style={{ width: '25%' }}><text>Country</text></div>

            </div>
            {accountsList.map((account, index) =>
                (<BankAccountItem account={account} key={index} />))}
            <div style={{ marginTop: '10vh' }}>
                <Button variant="filled" color="green" onClick={open}>Open New Account</Button>
            </div>
        </div>
    );
}
