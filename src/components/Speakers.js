import IntroductoryCard from "./IntroductoryCard";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RainbowTypography from "./RainbowTypography";

function requestForSpeakers(setSpeakers) {
    const items = [
        {
            name: "Ali Hamed Moosavian",
            title: "title",
            src: "/images/Ali Hamed Moosavian.jpg",
            id: 2,
            moreInfo: true
        },
        {
            name: "Leila Taghavi",
            title: "title",
            src: "/images/Leila Taghavi.png",
            id: 3,
            moreInfo: true
        },
        {
            name: "Min-Hsiu Hsieh",
            title: "title",
            src: "/images/Min-Hsiu Hsieh.png",
            id: 4
        },
        {
            name: "Saleh Rahimi Keshari",
            title: "title",
            src: "/images/Saleh Rahimi Keshari.png",
            id: 5,
            moreInfo: false
        },
    ]
    setSpeakers(items)
}


export default function Speakers() {
    const [speakers, setSpeakers] = useState(null)
    useEffect(()=>requestForSpeakers(setSpeakers),[])
    if(!speakers)
        return <div/>
    return (
        <Container sx={{ display: "fluid", justifyContent: "center" }}>
            <RainbowTypography variant="h1" textAlign="center" sx={{ pb: 5 }} color="secondary.light">Speakers</RainbowTypography>
            <Grid container spacing={5}>
                {
                    speakers.map(item =>(
                        <Grid item sx={{ width: "17vw" }}>
                            <IntroductoryCard src={item.src} name={item.name} title={item.title} moreInfo={item.moreInfo} personId={item.id}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
