'use client';
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";
import { Donation } from "@/models/stock";
import { IconX } from "@tabler/icons-react";

interface DonationItemProps {
    donation: Donation;
}

export default function DonationItem({donation}: DonationItemProps) {
    return (
        <div className="listItemDiv" id="donationItemDiv">
            <Button id="removeBttn" variant="filled" color="red" size="compact-sm" ><IconX size={15} /></Button>
            <Divider variant="dotted" id="listItemDivider" my="sm" label={donation.charity} labelPosition="left" color="taupe" />
            <text>$</text>
            <text>{donation.price}</text>
        </div>
    )
}