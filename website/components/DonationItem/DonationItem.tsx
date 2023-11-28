'use client';

import { Accordion, Button, Group, NumberInput } from '@mantine/core';
import '../../resources/stylesheet.css';
import { useState } from 'react';
import { Donation } from '@/models/stock';

interface DonationItemProps {
    donation: Donation
    makeDonation: any
    liquidFunds: number
    index: number
}

// eslint-disable-next-line max-len
export default function DonationItem({ donation, makeDonation, liquidFunds, index }: DonationItemProps) {
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
                <text id="charityDescription">{donation.description}</text>
                <Group>
                    <NumberInput
                      max={liquidFunds}
                      min={0}
                      step={Math.round(liquidFunds / 20)}
                      value={value}
                      onChange={(value) => setValue(Number(value))}
                    />
                    <Button onClick={donationButton} color="green">Donate</Button>
                </Group>
            </Accordion.Panel>
            </Accordion.Item>

        </div>
    );
}
