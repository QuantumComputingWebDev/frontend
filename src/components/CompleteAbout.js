import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, CardMedia, Stack} from "@mui/material";
import RainbowTypography from "./RainbowTypography";

export default function CompleteAbout() {
    return (
        <Container>
            <Grid container>
                <Grid item md={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
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
                                This is an introductory crash course in quantum computing with some hands-on materials.
                                This course is suitable for people with a background in tech, with a minimum knowledge of programming and linear algebra.
                                Registration is only allowed for employees of Hezardastan Holding and its subsidiaries but the resources,
                                consisting of recorded videos of the sessions, hands-on problems and etc. are publicly available.
                            </RainbowTypography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Card>
                        <CardMedia component="img" image="/images/about.jpg" alt="poster" />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}