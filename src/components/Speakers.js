import IntroductoryCard from "./IntroductoryCard";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RainbowTypography from "./RainbowTypography";
import {requestForSpeakers} from "../api/dummy";
import {Box} from "@mui/material";

export default function Speakers() {
    const [speakers, setSpeakers] = useState(null)
    useEffect(()=>requestForSpeakers(setSpeakers),[])
    if(!speakers)
        return <div/>
    return (
        <Container sx={{ display: "fluid", justifyContent: "center" }}>
            <RainbowTypography variant="h1" textAlign="center" sx={{ pb: 5 }} color="secondary.light">Speakers</RainbowTypography>
            <Grid container spacing={5} sx={{ display: "fluid", justifyContent: "center" }}>
                {
                    speakers.map(item =>(
                        <Grid item md={4} sm={6} xs={12}>
                            <Box>
                                <IntroductoryCard {...item} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
