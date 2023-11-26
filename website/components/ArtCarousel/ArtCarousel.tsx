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
            <ArtItem donateArt={donateArt} editArt={editArt} art={art} index={index} key={index} />
        </Carousel.Slide>
    ));

    return (
        <div>
            <text className="panelHeader">Art</text>
            <Carousel id="artCar" withIndicators>
            {slides}
            </Carousel>
        </div>
    );
}
