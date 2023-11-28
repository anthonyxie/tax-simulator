import { Button, Divider, Modal, NumberInput, Select } from '@mantine/core';
import { Property, listOfProperties } from '@/models/stock';
import PropertyItem from '../PropertyItem/PropertyItem';
import '../../resources/stylesheet.css';

interface PropertyListProps {
    propertiesList: Property[]
}

export default function PropertyList({ propertiesList }: PropertyListProps) {
    return (
        <>
            <div>
                <text className="panelHeader">Property Gallery</text>
                <div className="flexRow">
                    {propertiesList.map((property, index) =>
                        (<PropertyItem property={property} key={index} />))}
                </div>
            </div>
        </>

    );
}
