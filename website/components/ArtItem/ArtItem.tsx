'use client';

import { Button, Modal, Select } from '@mantine/core';
import '../../resources/stylesheet.css';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Art, listOfEvaluators } from '@/models/stock';

interface ArtItemProps {
    art: Art,
    index: Number,
    editArt?: any,
    donateArt: any,
    sellArt: any
}

export default function ArtItem({ art, index, editArt, donateArt, sellArt }: ArtItemProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const [evalIndex, setEvalIndex] = useState<number>(0);
    const [evaluator, setEvaluator] = useState<string | null>(listOfEvaluators[0].name);

    useEffect(() => {
        let i = 0;
        const evalName = evaluator;
        for (let j = 0; j < listOfEvaluators.length; j++) {
            if (listOfEvaluators[j].name == evalName) {
                i = j;
            }
        }
        setEvalIndex(i);
    }, [evaluator]);

    function appraiseArt() {
        open();
    }

    useEffect(() => {
        console.log(evalIndex);
        console.log(art.prices);
    }, [evalIndex, art]);

    function submitAppraisal() {
        const newArt = { ...art };
        newArt.appraised = true;
        newArt.priceIndex = listOfEvaluators[evalIndex].index;
        editArt(newArt, index);
        close();
    }

    function donation() {
        donateArt(index);
    }

    function sell() {
        sellArt(index);
    }
    return (
        <div className="flexRow" id="artItemDiv">
            <Modal opened={opened} onClose={close} centered>
                <Select
                  value={evaluator}
                  defaultValue={listOfEvaluators[0].name}
                  onChange={(value) => setEvaluator(value)}
                  data={listOfEvaluators.map((evaluator) => evaluator.name)}
                />
                <Button variant="filled" color="taupe" size="compact-md" onClick={submitAppraisal}>Submit Appraisal</Button>
            </Modal>
            <div id="artImg">
                <img src={art.imgPath} alt="art" />
            </div>
            <div className="flexCol" id="artInfo">
                <text id="artName">{art.name}</text>
                <text>by {art.artist}</text>
                <text>made {art.year}</text>
                <text>purchased for ${art.startPrice}</text>

                {art.appraised ?
                    (
                        <text>valued ${String(art.prices[art.priceIndex])}</text>
                    ) : (
                        <text>valued ${String(art.startPrice)}</text>
                    )
                }
                    {!art.appraised ?
                    <Button variant="filled" color="taupe" size="compact-md" onClick={appraiseArt}>Appraise Art</Button>
                    :
                    <div className="flexRow">
                        <Button variant="filled" color="taupe" onClick={sell}>Sell Art</Button>
                        <Button variant="filled" color="taupe" onClick={donation}>Donate Art</Button>
                    </div>
                    }
            </div>
        </div>
    );
}
