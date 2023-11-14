'use client';
import { Button, CSSProperties } from "@mantine/core";

export default function StockItem({stock}) {
    const spacer: CSSProperties = {
        marginBottom: '0.5vh'
      }
    return (
        <div>
            <text>{stock.ticker}</text>
            <div style={spacer}></div>
            <text>{stock.price}</text>
            <Button variant="filled" >Buy Stock</Button>
        </div>
    )
}