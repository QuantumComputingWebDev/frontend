import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, Stack} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";
import RainbowTypography from "./RainbowTypography";
import Link from "@mui/material/Link";
import UpLink from "./UpLink";

export default function BriefAbout() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box component={Stack} direction="column" justifyContent="center" sx={{ flexGrow: 1 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                px: 5
                            }}
                        >
                            <RainbowTypography variant="h4">About the event</RainbowTypography>
                            <RainbowTypography variant="p" sx={{lineHeight: 2}}>
                                In this workshop, we start by briefly reviewing quantum computation and classical machine learning on the first day.
                                Then we cover basic ideas and methods of quantum machine learning on the second day.
                                We conclude the workshop by discussing some of the more advanced results in the field that coincide with the research interests of the speakers.
                            </RainbowTypography>
                            <Link component={UpLink} to="/about">Read More</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Card>
                        <LazyCardMedia component="img" image="/images/about.jpeg" alt="poster" />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
