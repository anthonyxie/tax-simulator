'use client';
import "../../resources/stylesheet.css";
import { Property } from "@/models/stock";

interface PropertyItemProps {
    property: Property;
}

export default function PropertyItem({ property }: PropertyItemProps) {
    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + ' million';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + ' thousand';
        } else {
            return num.toString();
        }
    };
    return (
        <div className="listItemDiv" id="propertyItemDiv">
            <img id="propertyImg" src={property.imgPath} alt="stock image of house"/>
            <text id="propertyValue">${formatNumber(property.value)}</text>
            <text id="propertyDetails">{property.name}</text>
            <text id="propertyDetails">{property.location}</text>
        </div>
    )
}