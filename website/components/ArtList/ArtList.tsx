import { Art } from "@/models/stock";
import ArtItem from "../ArtItem/ArtItem";

interface ArtListProps {
    artsList: Art[]
}
export default function ArtList({artsList}: ArtListProps) {
    return (
        <div>
            <text>Art: </text>
            {artsList.map((art, index) => (<ArtItem art={art} key={index}></ArtItem>))}
         </div>
    );
}