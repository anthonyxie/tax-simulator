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
        <div className="flexRow" id="propertyItemDiv">
            <div id="propertyImg">
                <Image src={property.imgPath} alt="property item" fit="contain" />
            </div>
            <div className="flexCol" id="propertyInfo">
                <text id="propertyName">{property.name}</text>
                <text>${formatNumber(property.value)}</text>
                <text id="propertyDetails">{property.location}</text>
                <text id="propertyDetails">{property.description}</text>
            </div>
        </div>
    );
}
