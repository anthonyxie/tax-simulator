'use client';

import StockItem from "../StockItem/StockItem";

export default function StockList({stocksList}) {
    return (
        <div>
            <text>Stocks: </text>
            {stocksList.map((theStock, index) => (<StockItem stock={theStock} key={index}></StockItem>))}
         </div>
    );
}