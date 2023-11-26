import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Art } from '@/models/stock';
import '../../resources/stylesheet.css';
import '@mantine/carousel/styles.css';
import ArtItem from '../ArtItem/ArtItem';

interface ArtListProps {
    artsList: Art[]
    editArt: any
    donateArt: any
}

export default function ArtCarousel({ artsList, editArt, donateArt }: ArtListProps) {
    const slides = artsList.map((art, index) => (
        <Carousel.Slide key={index} id="artSlide">
            {/* <div id="artImg">
                <img src="/assetsImgs/vase.png" alt="asset img" />
            </div>
            <div className="flexCol" id="artInfo">
                <text>{art.name}</text>
                <text>{art.name}</text>
                <text>2001</text>
            </div> */}
            <ArtItem donateArt={donateArt} editArt={editArt} art={art} index={index} key={index} />
        </Carousel.Slide>
    ));

    return (
        <div className="flexCol" id="artDiv">
            <text className="panelHeader">Art</text>
            <Carousel id="artCar" withIndicators>
            {slides}
            </Carousel>
        </div>
    );
}

{/* {artsList.map((art, index) => (
                    <Carousel.Slide key={index} id="artSlide">
                        {slides}
                            <div id="artImg">
                                <img src="/assetsImgs/vase.png" alt="asset img" />
                            </div>
                            <div className="flexCol" id="artInfo">
                                <text>{art.name}</text>
                                <text>{art.name}</text>
                                <text>2001</text>
                            </div>
                    </Carousel.Slide>
                ))} */}
                
