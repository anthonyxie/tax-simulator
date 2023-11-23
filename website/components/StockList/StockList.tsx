'use client';

import { Stock } from "@/models/stock";
import StockItem from "../StockItem/StockItem";

interface StockListProps {
    stocksList: Stock[]
}
export default function StockList({stocksList}: StockListProps) {
    return (
        <div>
            <text className="panelHeader">Stocks</text>
            <div id="stocksHeader">
                <text>Ticker</text>
                <text>Value</text>
            </div>
            {stocksList.map((theStock, index) => (<StockItem stock={theStock} key={index}></StockItem>))}
         </div>
    );
}