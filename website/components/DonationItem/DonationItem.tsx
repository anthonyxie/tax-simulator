'use client';
import { Accordion, Button, Divider, Group, NumberInput } from "@mantine/core";
import "../../resources/stylesheet.css";
import { Donation } from "@/models/stock";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

interface DonationItemProps {
    donation: Donation;
}

export default function DonationItem({donation}: DonationItemProps) {
    const [value, setValue] = useState(0);
    return (
        <div className="listItemDiv" id="donationItemDiv">
            
            <Accordion.Item key={donation.charity} value={donation.charity}>
            <Accordion.Control>{donation.charity}</Accordion.Control>
            <Accordion.Panel>
                <text>{donation.description}</text>
                <Group>
                    <NumberInput></NumberInput>
                    <Button>me when i'm donating</Button>
                </Group>
            </Accordion.Panel>
            </Accordion.Item>
            
        </div>
    )
}