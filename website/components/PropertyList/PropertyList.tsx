import { Property, listOfProperties } from "@/models/stock";
import PropertyItem from "../PropertyItem/PropertyItem";
import { Button, Divider, Modal, NumberInput, Select } from "@mantine/core";
import "../../resources/stylesheet.css";

interface PropertyListProps {
    propertiesList: Property[]
}

export default function PropertyList({ propertiesList }: PropertyListProps) {
    return (
        <>
            <text className="panelHeader">Property Gallery</text>
            <div className="flexRow">
                {propertiesList.map((property, index) => (<PropertyItem property={property} key={index}></PropertyItem>))}
            </div>
        </>
        
    )
}