import { BankAccount } from "@/models/stock";
import BankAccountItem from "../BankAccountItem/BankAccountItem";
import "../../resources/stylesheet.css";

interface AccountListProps {
    accountsList: BankAccount[]
}

export default function BankAccountList({ accountsList }: AccountListProps) {
    return (
        <div>
            <text className="panelHeader">Accounts</text>
            <div id="bankAccountHeader">
                <div style={{ width: '25%'}}><text>Name</text></div>
                <div style={{ width: '25%' }}><text>Amount</text></div>
                <div style={{ width: '25%' }}><text>APY</text></div>
            </div>
            {accountsList.map((account, index) => (<BankAccountItem account={account} key={index}></BankAccountItem>))}
        </div>
    );
}