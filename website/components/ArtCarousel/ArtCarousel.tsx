import { Art } from "@/models/stock";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import "../../resources/stylesheet.css"
import '@mantine/carousel/styles.css';
import ArtItem from "../ArtItem/ArtItem";

interface ArtListProps {
    artsList: Art[]
}
export default function ArtCarousel({artsList}: ArtListProps) {
    return (
        <div className="flexCol" id="artDiv">
            <text className="panelHeader">Art</text>
            <Carousel id="artCar" slideSize="100%" height={200} slideGap="sm" controlSize={25} loop withIndicators>
                {artsList.map((art, index) => (
                    <Carousel.Slide className="flexRow" id="artSlide">
                        <div id="artImg">
                            <img src="/assetsImgs/vase.png" alt="asset img" />
                        </div>
                        <div className="flexCol" id="artInfo">
                            <text>{art.name}</text>
                            <text>{art.name}</text>
                            <text>2001</text>
                        </div>
                    </Carousel.Slide>
                ))}

            </Carousel>
        </div>
    );
}
