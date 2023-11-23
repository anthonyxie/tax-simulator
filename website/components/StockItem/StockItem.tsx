'use client';
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";
export default function StockItem({stock}) {
    return (
        <div className="stockItemDiv">
            <Divider variant="dotted" id="stockDivider" my="sm" label={stock.ticker} labelPosition="left" color="taupe" />
            <text>$</text>
            <text>{stock.price}</text>
            <Button variant="filled" color="green">Buy 1</Button>
            <Button variant="filled" color="red">Sell 1</Button>
        </div>
    )
}