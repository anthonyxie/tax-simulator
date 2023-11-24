'use client';

import DonationItem from "../DonationItem/DonationItem";
export default function DonationList({donationList}) {
    return (
        <div>
            <text className="panelHeader">Donations</text>
            <div id="donationHeader">
                <text>Charity</text>
                <text>Value</text>
            </div>
            {donationList.map((theDonation, index) => (<DonationItem donation={theDonation} key={index}></DonationItem>))}
         </div>
    );
}