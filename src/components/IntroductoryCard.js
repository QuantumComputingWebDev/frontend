import {Card, Typography, useMediaQuery} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";

import Box from "@mui/material/Box";
import "../styles/IntroductoryCard.css";
import {useNavigate} from "react-router-dom";


export default function IntroductoryCard({src, name, title, personId:id, moreInfo}) {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const matchesSm = useMediaQuery((theme) => theme.breakpoints.only('sm'));
    const matchesMd = useMediaQuery((theme) => theme.breakpoints.only('md'));
    let imageSize = {height: "360px", width: "270px"}
    if(matchesMd) {
        imageSize = {height: "255px", width: "190px"}
    }
    if(matchesSm) {
        imageSize = {height: "190px", width: "140px"}
    }
    if(matchesXs) {
        imageSize = {height: "160px", width: "120px"}
    }

    const navigate = useNavigate();
    const url = `/people/${id}`
    const go = moreInfo ? ()=>{navigate(url); window.scrollTo(0, 0)} : null

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card className="overlay-container" onClick={go} style={imageSize} sx={{ boxShadow: 3 }}>
                    <LazyCardMedia component="img" image={src} alt={name} style={{objectFit: "cover", objectPosition: "0 0", width: "100%", height: "100%"}} />
                    <Box className={`overlay-content ${moreInfo ? "golden-overlay-content" : ""}`} sx={{ display: "flex", flexDirection: 'column-reverse', cursor: "pointer" }}>
                        <Typography variant="h4" color="secondary.light">{title}</Typography>
                    </Box>
                </Card>
            </Box>
            {
                moreInfo ? <Typography variant="h5" sx={{ fontWeight: "bold" }} color="secondary.light" textAlign="center" className={"hoverYellow"} onClick={go}>{name}</Typography>
                :          <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary.light" textAlign="center">{name}</Typography>
            }
        </div>
    )
}
