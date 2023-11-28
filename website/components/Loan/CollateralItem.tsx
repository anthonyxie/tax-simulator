'use client';

import { Checkbox, Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Stock } from '@/models/stock';

interface collateralItemProps {
    stock: Stock
    setDisabled: any
    index: number
}
export default function CollateralItem({ stock, setDisabled, index }: collateralItemProps) {
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        if (disable != null) {
            setDisabled(index, disable);
        }
    }, [disable]);
    return (
        <div className="listItemDiv" id="stockItemDiv">
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={stock.ticker} labelPosition="left" color="black" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={String(stock.amount)} labelPosition="left" color="black" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={`$${stock.price}`} labelPosition="left" color="black" />
            <Checkbox checked={disable} disabled={stock.disabled} onChange={(value) => setDisable(value.currentTarget.checked)} color="copper" />
        </div>
    );
}
