'use client';
import { Accordion, Button, Divider, Group, NumberInput } from "@mantine/core";
import "../../resources/stylesheet.css";
import { Donation } from "@/models/stock";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

interface DonationItemProps {
    donation: Donation
    makeDonation: any
    liquidFunds: number
    index: number
}




export default function DonationItem({donation, makeDonation, liquidFunds, index}: DonationItemProps) {
    const [value, setValue] = useState<number>(0);

    function donationButton() {
        setValue(0);
        makeDonation(index, value);
    }


    return (
        <div className="listItemDiv" id="donationItemDiv">
            
            <Accordion.Item key={donation.charity} value={donation.charity}>
            <Accordion.Control>{donation.charity}</Accordion.Control>
            <Accordion.Panel>
                <text>{donation.description}</text>
                <Group>
                    <NumberInput max={liquidFunds} min={0} step={Math.round(liquidFunds / 20)} value={value} onChange={(value) => setValue(Number(value))}></NumberInput>
                    <Button onClick={donationButton}>me when i'm donating</Button>
                </Group>
            </Accordion.Panel>
            </Accordion.Item>
            
        </div>
    )
}