'use client';
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";
export default function DonationItem({donation}) {
    return (
        <div className="donationItemDiv">
            <Divider variant="dotted" id="stockDivider" my="sm" label={donation.ticker} labelPosition="left" color="taupe" />
            <text>$</text>
            <text>{donation.price}</text>
            <Button variant="filled" color="green">Buy 1</Button>
            <Button variant="filled" color="red">Sell 1</Button>
        </div>
    )
}