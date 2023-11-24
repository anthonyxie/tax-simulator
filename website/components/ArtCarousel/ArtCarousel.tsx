import { Art } from "@/models/stock";
import { Carousel } from '@mantine/carousel';
import "../../resources/stylesheet.css"

interface ArtListProps {
    artsList: Art[]
}
export default function ArtCarousel({artsList}: ArtListProps) {
    return (
        <div>
            <text className="panelHeader">Art</text>
            { <Carousel slideSize="70%" height={200} slideGap="sm" controlSize={25} loop withIndicators>
                <Carousel.Slide>1</Carousel.Slide>
              </Carousel> }
         </div>
    );
}