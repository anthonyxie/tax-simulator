import { Art } from "@/models/stock";
import { Carousel } from '@mantine/carousel';
import "../../resources/stylesheet.css"

interface ArtListProps {
    artsList: Art[]
}
export default function ArtCarousel({artsList}: ArtListProps) {
    return (
        <div className="flexCol" id="artDiv">
            <text className="panelHeader">Art</text>
            <Carousel id="artCar" slideSize="100%" height={200} slideGap="sm" controlSize={25} loop withIndicators>
                <Carousel.Slide className="flexRow" id="artSlide">
                    <div id="artImg">
                        <img src="/assetsImgs/vase.png" alt="asset img" />
                    </div>
                    <div className="flexCol" id="artInfo">
                        <text>NAME OF PIECE</text>
                        <text>NAME OF ARTIST</text>
                        <text>YEAR</text>
                    </div>
                </Carousel.Slide>
            </Carousel>
        </div>
    );
}
