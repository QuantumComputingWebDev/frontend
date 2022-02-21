import {Card, Typography, useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import "../styles/IntroductoryCard.css";
import Link from "@mui/material/Link";
import ClickableImagePoster from "./ClickableImagePoster";
import LazyLoad from 'react-lazyload';
import { Skeleton } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function IntroductoryCard({src, name, about, title, id, moreInfo, link, posterSrc}) {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const matchesSm = useMediaQuery((theme) => theme.breakpoints.only('sm'));
    const matchesMd = useMediaQuery((theme) => theme.breakpoints.only('md'));
    const navigate = useNavigate();

    let imageSize = {height: "360px", width: "270px"}
    if(matchesMd || matchesSm || matchesXs) {
        imageSize = {height: "275px", width: "210px"}
    }

    const child = (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Card className="overlay-container" style={imageSize} sx={{ boxShadow: 3 }}>
                <LazyLoad {...imageSize} once offset={100} style={{width: "100%", height: "100%"}} placeholder={<Skeleton style={{width: "100%", height: "100%"}} />}>
                    <img src={src} alt={name} style={{objectFit: "cover", width: "100%", height: "100%"}} />
                    {moreInfo ? <div className="overlay-content" /> : []}
                    <div className="ribbon">
                        <Typography variant="h6" sx={{ fontWeight: "bold", pl: 1 }} color="#00F6FF" textAlign="center">
                            <span className={moreInfo ? "shown" : ""} color="primary.light">{name}</span>
                            { moreInfo ? <Link className="hidden" color="primary.dark">More info</Link> : []}
                        </Typography>
                    </div>
                </LazyLoad>
            </Card>
        </Box>
    )
    if(!moreInfo) {
        return child;
    }
    if(!posterSrc) {
        return (
            <Box onClick={()=>{navigate(`/people/${id}`); window.scroll(0,0);}}>
                {child}
            </Box>
        )
    } else {
        return (
            <ClickableImagePoster poster={posterSrc}>
                {child}
            </ClickableImagePoster>
        )
    }
}
