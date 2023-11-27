'use client';

import { Button, Divider } from '@mantine/core';
import '../../resources/stylesheet.css';
import { Stock } from '@/models/stock';

interface StockItemProps {
    stock: Stock,
    sellStock: any,
    index: number,
}

export default function StockItem({ stock, sellStock, index }: StockItemProps) {
    function selltheStock() {
        sellStock(index, 100);
    }
    return (
        <div className="listItemDiv" id="stockItemDiv">
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={stock.ticker} labelPosition="left" color="taupe" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={String(stock.amount)} labelPosition="left" color="taupe" />
            <Divider variant="dotted" id="listItemDivider" my="sm" size="md" label={`$${stock.price}`} labelPosition="right" color="taupe" />
            <Button variant="filled" color="red" onClick={selltheStock} disabled={stock.disabled}><text id="sellStocksBttnTxt">Sell 100</text></Button>
        </div>
    );
}
