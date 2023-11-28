'use client';

import '../../resources/stylesheet.css';
import { Button, Image } from '@mantine/core';
import Evaluators from '../Evaluators/Evaluators';
import { Art, Eval } from '@/models/stock';

interface ArtItemProps {
    art: Art,
    evalList: Eval[],
    index: number,
    editArt?: any,
    donateArt: any,
    sellArt: any
}

// eslint-disable-next-line max-len
export default function ArtItem({ evalList, art, index, editArt, donateArt, sellArt }: ArtItemProps) {
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
                <Image src={art.imgPath} alt="art" fit="contain" h="auto" w="auto" />
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
                    <Evaluators evalList={evalList} index={index} editArt={editArt} art={art} />
                    :
                    <div className="flexCol" id="appraisedArtBttns">
                        <Button variant="filled" color="copper" onClick={sell}>Sell Art</Button>
                        <Button variant="filled" color="copper" onClick={donation}>Donate Art</Button>
                    </div>
                }
            </div>
        </div>
    );
}
