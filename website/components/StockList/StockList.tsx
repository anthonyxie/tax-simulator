'use client';

import { Stock } from '@/models/stock';
import StockItem from '../StockItem/StockItem';

interface StockListProps {
    stocksList: Stock[],
    sellStock?: any,
}
export default function StockList({ stocksList, sellStock }: StockListProps) {
    return (
        <div>
            <text className="panelHeader">Stocks</text>
            <div className="flexRow" id="stocksHeader">
                <text>Ticker</text>
                <text>Amount Owned</text>
                <text id="lastVal">Value</text>
            </div>
            {stocksList.map((theStock, index) => (
                <StockItem sellStock={sellStock} index={index} stock={theStock} key={index} />
            ))}
        </div>
    );
}
