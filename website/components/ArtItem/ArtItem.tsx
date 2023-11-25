"use client";

import { Art, listOfEvaluators } from "@/models/stock";
import { Button, Divider, Modal, Select } from "@mantine/core";
import "../../resources/stylesheet.css";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";

interface ArtItemProps {
    art: Art,
    index: Number,
    editArt?: any,
    donateArt: any
}

export default function ArtItem({art, index, editArt, donateArt}: ArtItemProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const [evalIndex, setEvalIndex] = useState<number>(0);
    const [evaluator, setEvaluator] = useState<string | null>(listOfEvaluators[0].name);
    
    useEffect(() => {
        let i = 0
        listOfEvaluators.forEach((account, index) => {
            if (account.name == evaluator) {
                i = index;
            }
        });
        setEvalIndex(i);
    }, [evaluator])
    function appraiseArt() {
        open();
        // let newArt = art;
        // newArt.appraised = true;
        // newArt.priceIndex = 1;

    }

    function submitAppraisal() {
        let newArt = art;
        newArt.appraised = true;
        newArt.priceIndex = evalIndex;
        editArt(newArt, index);
        close();
    }

    function donation() {
        donateArt(index);
    }
    
    return (
        <div className="listItemDiv" id="artItemDiv">
            <Modal opened={opened} onClose={close} centered>
                <Select value={evaluator} defaultValue={listOfEvaluators[0].name} onChange={(value) => setEvaluator(value)}data={listOfEvaluators.map((evaluator) => {
                    return evaluator.name;
                })}/>
                <Button variant="filled" color="taupe" size="compact-md" onClick={submitAppraisal}>Submit Appraisal</Button>
            </Modal>
            <text>{art.name}</text>
            {art.priceIndex && <text>{art.prices[art.priceIndex]}</text>}
            {!art.appraised ? <Button variant="filled" color="taupe" size="compact-md" onClick={appraiseArt}>Appraise Art</Button> : <Button variant="filled" color="taupe" onClick={donation}>Donate Art</Button>}          
        </div>
    );
}