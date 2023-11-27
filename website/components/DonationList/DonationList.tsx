'use client';
import { Donation } from "@/models/stock";
import DonationItem from "../DonationItem/DonationItem";
import { Accordion } from "@mantine/core";

interface DonationListProps {
    donationList: Donation[]
    makeDonation: any
    liquidFunds: number
}

export default function DonationList({donationList, makeDonation, liquidFunds}: DonationListProps) {
    return (
        <div>
            <text className="panelHeader">Donations</text>
            <div id="donationHeader">
                <text>Charity</text>
                <text id="rightmost">Value</text>
            </div>
            <Accordion>
                {donationList.map((theDonation, index) => (<DonationItem makeDonation={makeDonation} index={index} liquidFunds={liquidFunds} donation={theDonation} key={index}></DonationItem>))}
            </Accordion>
         </div>
    );
}