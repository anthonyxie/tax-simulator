"use client";

import { Art } from "@/models/stock";
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";

interface ArtItemProps {
    art: Art
}

export default function ArtItem({art}: ArtItemProps) {
    return (
        <div className="listItemDiv" id="artItemDiv">
            <text>{art.name}</text>
            {art.priceIndex && <text>{art.prices[art.priceIndex]}</text>}
            {!art.appraised ? <Button variant="filled" color="taupe" size="compact-md">Appraise Art</Button> : <Button variant="filled" color="taupe">Donate Art</Button>}          
        </div>
    );
}