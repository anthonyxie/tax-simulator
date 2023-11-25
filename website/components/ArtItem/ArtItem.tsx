"use client";

import { Art } from "@/models/stock";
import { Button, Divider } from "@mantine/core";
import "../../resources/stylesheet.css";

interface ArtItemProps {
    art: Art,
    index: Number,
    editArt?: any,
}

export default function ArtItem({art, index, editArt}: ArtItemProps) {

    function appraiseArt() {
        let newArt = art;
        newArt.appraised = true;
        newArt.priceIndex = 1;
        editArt(newArt, index);
    }
    
    return (
        <div className="listItemDiv" id="artItemDiv">
            <text>{art.name}</text>
            {art.priceIndex && <text>{art.prices[art.priceIndex]}</text>}
            {!art.appraised ? <Button variant="filled" color="taupe" size="compact-md" onClick={appraiseArt}>Appraise Art</Button> : <Button variant="filled" color="taupe">Donate Art</Button>}          
        </div>
    );
}