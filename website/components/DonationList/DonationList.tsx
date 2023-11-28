'use client';

/* eslint-disable max-len */
import { Accordion } from '@mantine/core';
import { Donation } from '@/models/stock';
import DonationItem from '../DonationItem/DonationItem';

interface DonationListProps {
    donationList: Donation[]
    makeDonation: any
    liquidFunds: number
}

export default function DonationList({ donationList, makeDonation, liquidFunds }: DonationListProps) {
    return (
        <div className="flexCol">
            <text className="panelHeader">Donations</text>
            <div id="donationHeader">
                <text>Charities your client are associated with through personal relationships:</text>
            </div>
            <Accordion>
                {donationList.map((theDonation, index) => (<DonationItem makeDonation={makeDonation} index={index} liquidFunds={liquidFunds} donation={theDonation} key={index} />))}
            </Accordion>
        </div>
    );
}
