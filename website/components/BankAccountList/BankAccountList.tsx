import { BankAccount, listOfCountries } from "@/models/stock";
import BankAccountItem from "../BankAccountItem/BankAccountItem";
import { Button, Divider, Modal, NumberInput, Select } from "@mantine/core";
import "../../resources/stylesheet.css";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { create } from "domain";

interface AccountListProps {
    accountsList: BankAccount[]
    addAccount: any
}

export default function BankAccountList({ accountsList, addAccount }: AccountListProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const [divertedAccount, setDivertedAccount] = useState<string | null>("");
    const [usedAccountIndex, setUsedAccountIndex] = useState(0);
    const [amountMoved, setAmountMoved] = useState(0);
    const [divertedCountry, setDivertedCountry] = useState<string | null>("");

    useEffect(() => {
        let i = 0
        accountsList.forEach((account, index) => {
            if (account.name == divertedAccount) {
                i = index;
            }
        });
        setUsedAccountIndex(i);
    }, [divertedAccount]);

    useEffect(() => {
        console.log(divertedAccount);
    }, [divertedAccount]);

    function createAccount() {
        let newAccount = {
            name: "idk",
            country: divertedCountry, 
            amount: amountMoved,
            APY: 0.05
        }
        let divertedAccount = {...accountsList[usedAccountIndex]}
        divertedAccount.amount -= amountMoved;
        let uaIndex = usedAccountIndex;
        addAccount(newAccount, divertedAccount, uaIndex);
        close();
    }

    return (
        <div>
            <Modal opened={opened} onClose={close} centered>
            <Select
                label="Divert funds from which account"
                placeholder="Pick value"
                data={accountsList.map((account, index) => {
                    return account.name;
                })}
                value={divertedAccount}
                onChange={(value) => setDivertedAccount(value)}
            />
            <NumberInput
                label={`Move how much from this account? Max: ${accountsList[usedAccountIndex].amount}`}
                placeholder={"Move how much from this account?"}
                min={0}
                step={accountsList[usedAccountIndex].amount / 20}
                max={accountsList[usedAccountIndex].amount}
                defaultValue={0}
                value={amountMoved}
                prefix='$'
                decimalScale={2}
                onChange={(value) => setAmountMoved(Number(value))}
            />
            <Select
                label="Account Location"
                placeholder="Pick value"
                data={listOfCountries.map((country, index) => {
                    return country.country;
                })}
                value={divertedCountry}
                onChange={(value) => setDivertedCountry(value)}
            />

            <Button onClick={createAccount}>Create New Holdings Account</Button>
            </Modal>
            <text className="panelHeader">Accounts</text>
            <div id="bankAccountHeader">
                <div style={{ width: '20%'}}><text>Name</text></div>
                <div style={{ width: '20%' }}><text>Amount</text></div>
                <div style={{ width: '20%' }}><text>Returns</text></div>
                <div style={{ width: '20%' }}><text>Country</text></div>
                <div style={{ width: '20%' }}><text>Tax Percentage</text></div>
                

            </div>
            {accountsList.map((account, index) => (<BankAccountItem account={account} key={index}></BankAccountItem>))}
            <div style={{marginTop: '10vh'}}>
                <Button variant="filled" color="green" onClick={open}>Open New Account</Button>
            </div>
        </div>
    );
}