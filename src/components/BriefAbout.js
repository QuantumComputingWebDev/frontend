import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, CardMedia, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";

const textStyle = {
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "left",
    lineHeight: 2
}

export default function BriefAbout() {
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
                            <Typography variant="h4" sx={{...textStyle}}>About the event</Typography>
                            <Typography variant="p" sx={{...textStyle}}>
                                This is an introductory crash course in quantum computing with some hands-on materials.
                                This course is suitable for people with a background in tech, with a minimum knowledge of programming and linear algebra.
                                Registration is only allowed for employees of Hezardastan Holding and its subsidiaries but the resources,
                                consisting of recorded videos of the sessions, hands-on problems and etc. are publicly available.
                            </Typography>
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
