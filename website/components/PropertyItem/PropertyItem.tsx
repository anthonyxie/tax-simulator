'use client';

import '../../resources/stylesheet.css';
import { Image } from '@mantine/core';
import { Property } from '@/models/stock';

interface PropertyItemProps {
    property: Property;
}

export default function PropertyItem({ property }: PropertyItemProps) {
    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)} million`;
        } if (num >= 1000) {
            return `${(num / 1000).toFixed(1)} thousand`;
        }
            return num.toString();
    };
    return (
        // <div className="flexRow" id="propertyItemDiv">
        //     <div className="flexRow" id="propDetailRow">
        //         <text id="propertyDetails">{property.name}</text>
        //         <text id="propertyValue">${formatNumber(property.value)}</text>
        //     </div>
        //     <Image id="propertyImg" src={property.imgPath} alt="stock image of house" />
        //     <text id="propertyDetails">{property.location}</text>
        //     <text id="propertyDetails">{property.description}</text>
        // </div>
        <div className="flexRow" id="artItemDiv">

            <div id="artImg">
                <Image src={property.imgPath} alt="art" fit="contain" h="auto" w="auto" />
            </div>
            <div className="flexCol" id="artInfo">
                <text id="artName">{property.name}</text>
                <text>${formatNumber(property.value)}</text>
                <text id="propertyDetails">{property.location}</text>
                <text id="propertyDetails">{property.description}</text>
            </div>
        </div>
    );
}
