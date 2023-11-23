"use client";

import { Art } from "@/models/stock";
import { Button } from "@mantine/core";

interface ArtItemProps {
    art: Art
}
export default function ArtItem({art}: ArtItemProps) {

    return (
        <div>
            <text>{art.name}</text>
            {art.priceIndex && <text>{art.prices[art.priceIndex]}</text>}
            {!art.appraised ? <Button variant="filled" color="taupe">Appraise Art</Button> : <Button variant="filled" color="taupe">Donate Art</Button>}          
        </div>
    );
}