'use client';

import '../../resources/stylesheet.css';
// import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
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
