import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, CardContent, CardMedia, Stack, useMediaQuery} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";
import RainbowTypography from "./RainbowTypography";
import Link from "@mui/material/Link";
import UpLink from "./UpLink";
import ImageText from "./ImageText";

export default function BriefAbout() {
    return (
        <Container>
            <ImageText src="/images/about.jpeg">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
                    <RainbowTypography variant="h3">About the event</RainbowTypography>
                    <RainbowTypography variant="h6" sx={{lineHeight: 2}}>
                        In this workshop, we start by briefly reviewing quantum computation and classical machine learning on the first day.
                        Then we cover basic ideas and methods of quantum machine learning on the second day.
                        We conclude the workshop by discussing some of the more advanced results in the field that coincide with the research interests of the speakers.
                    </RainbowTypography>
                </Box>
            </ImageText>
        </Container>
    )
}
