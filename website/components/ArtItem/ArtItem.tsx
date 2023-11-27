'use client';

import '../../resources/stylesheet.css';
import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import Evaluators from '../Evaluators/Evaluators';
import { Art, listOfEvaluators } from '@/models/stock';

interface ArtItemProps {
    art: Art,
    index: Number,
    editArt?: any,
    donateArt: any,
    sellArt: any
}

export default function ArtItem({ art, index, editArt, donateArt, sellArt }: ArtItemProps) {
    // const [opened, { open, close }] = useDisclosure(false);

    function donation() {
        donateArt(index);
    }

    function sell() {
        sellArt(index);
    }
    return (
        <div className="flexRow" id="artItemDiv">

            <div id="artImg">
                <img src={art.imgPath} alt="art" />
            </div>
            <div className="flexCol" id="artInfo">
                <text id="artName">{art.name}</text>
                <text>by {art.artist}, {art.year}</text>
                <div className="flexRow" id="purchaseRow">
                    <text>purchased for ${art.startPrice}</text>
                    {art.appraised ?
                        (
                            <text>valued at ${String(art.prices[art.priceIndex])}</text>
                        ) : (
                            <text>valued at ${String(art.startPrice)}</text>
                        )
                    }
                </div>

                {!art.appraised ?
                    <Evaluators editArt={editArt} art={art} />
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
