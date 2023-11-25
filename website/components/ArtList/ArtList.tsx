import { Art } from "@/models/stock";
import ArtItem from "../ArtItem/ArtItem";

interface ArtListProps {
    artsList: Art[]
    editArt: any
    donateArt: any
}
export default function ArtList({artsList, editArt, donateArt}: ArtListProps) {
    return (
        <div>
            <text className="panelHeader">Art</text>
            {artsList.map((art, index) => (<ArtItem donateArt={donateArt} editArt={editArt} art={art} index={index} key={index}></ArtItem>))}
         </div>
    );
}