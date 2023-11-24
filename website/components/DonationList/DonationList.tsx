'use client';
import { Donation } from "@/models/stock";
import DonationItem from "../DonationItem/DonationItem";

interface DonationListProps {
    donationList: Donation[]
}

export default function DonationList({donationList}: DonationListProps) {
    return (
        <div>
            <text className="panelHeader">Donations</text>
            <div id="donationHeader">
                <text>Charity</text>
                <text id="rightmost">Value</text>
            </div>
            {donationList.map((theDonation, index) => (<DonationItem donation={theDonation} key={index}></DonationItem>))}
         </div>
    );
}