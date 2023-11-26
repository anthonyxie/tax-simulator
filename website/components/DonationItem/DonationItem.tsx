'use client';
import { Accordion, Button, Divider, NumberInput } from "@mantine/core";
import "../../resources/stylesheet.css";
import { Donation } from "@/models/stock";
import { IconX } from "@tabler/icons-react";

interface DonationItemProps {
    donation: Donation;
}

export default function DonationItem({donation}: DonationItemProps) {
    return (
        <div className="listItemDiv" id="donationItemDiv">
            
            <Accordion.Item key={donation.charity} value={donation.charity}>
            <Accordion.Control>{donation.charity}</Accordion.Control>
            <Accordion.Panel><text>{donation.description}</text><NumberInput></NumberInput></Accordion.Panel>
            </Accordion.Item>
            
        </div>
    )
}