"use client";

import { Art } from "@/models/stock";
import { Button, Divider, Modal } from "@mantine/core";
import "../../resources/stylesheet.css";
import { useDisclosure } from "@mantine/hooks";

interface ArtItemProps {
    art: Art,
    index: Number,
    editArt?: any,
}

export default function ArtItem({art, index, editArt}: ArtItemProps) {
    const [opened, { open, close }] = useDisclosure(false);
    

    function appraiseArt() {
        open();
        // let newArt = art;
        // newArt.appraised = true;
        // newArt.priceIndex = 1;
        // editArt(newArt, index);
    }
    
    return (
        <div className="listItemDiv" id="artItemDiv">
            <Modal opened={opened} onClose={close} centered>

            </Modal>
            <text>{art.name}</text>
            {art.priceIndex && <text>{art.prices[art.priceIndex]}</text>}
            {!art.appraised ? <Button variant="filled" color="taupe" size="compact-md" onClick={appraiseArt}>Appraise Art</Button> : <Button variant="filled" color="taupe">Donate Art</Button>}          
        </div>
    );
}