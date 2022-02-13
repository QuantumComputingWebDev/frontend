import {Card, CardContent, Typography, useMediaQuery} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";

import Box from "@mui/material/Box";
import "../styles/IntroductoryCard.css";
import {useNavigate} from "react-router-dom";
import Link from "@mui/material/Link";


export default function IntroductoryCard({src, name, title, personId:id, moreInfo}) {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const matchesSm = useMediaQuery((theme) => theme.breakpoints.only('sm'));
    const matchesMd = useMediaQuery((theme) => theme.breakpoints.only('md'));
    let imageSize = {height: "360px", width: "270px"}
    if(matchesMd || matchesSm || matchesXs) {
        imageSize = {height: "275px", width: "210px"}
    }

    const navigate = useNavigate();
    const url = `/people/${id}`
    const go = moreInfo ? ()=>{navigate(url); window.scrollTo(0, 0)} : null

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card className="overlay-container" onClick={go} style={imageSize} sx={{ boxShadow: 3 }}>
                    <LazyCardMedia component="img" image={src} alt={name} style={{objectFit: "cover", objectPosition: "0 0", width: "100%", height: "100%"}} />
                    <div className="overlay-content" />
                    <div className="ribbon">
                        <Typography variant="h6" sx={{ fontWeight: "bold", pl: 1 }} color="secondary.light" textAlign="center" onClick={go}>
                            <span className="shown" color="primary.light">{name}</span>
                            { moreInfo ? <Link className="hidden" color="primary.dark">More info</Link> : []}
                        </Typography>
                    </div>
                </Card>
            </Box>
        </div>
    )
}
