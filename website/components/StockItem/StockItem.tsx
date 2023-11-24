'use client';
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";
import { Stock } from "@/models/stock";

interface StockItemProps {
    stock: Stock
}
export default function StockItem({stock}: StockItemProps) {
    return (
        <div className="listItemDiv" id="stockItemDiv">
            <Divider variant="dotted" id="listItemDivider" my="sm" label={stock.ticker} labelPosition="left" color="taupe" />
            <text>$</text>
            <text>{stock.price}</text>
            <Button variant="filled" color="green">Buy 1</Button>
            <Button variant="filled" color="red">Sell 1</Button>
        </div>
    )
}