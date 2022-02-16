import ClickablePoster from "./ClickablePoster";
import LazyLoad from "react-lazyload";
import {Skeleton} from "@mui/lab";

export default function ClickableImagePoster({children, poster, onError}) {
    return <ClickablePoster
        inside={
            <LazyLoad once offset={100}
                      style={{maxHeight: "90vh", maxWidth: "90vw"}}
                      placeholder={<Skeleton style={{width: "100%", height: "100%"}}/>}
            >
                <img src={poster} style={{maxHeight: "90vh", maxWidth: "90vw"}} alt="poster" onError={onError}/>}
            </LazyLoad>
        }>
        {children}
    </ClickablePoster>
}