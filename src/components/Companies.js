import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Card, CardMedia, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Sponsor() {
    return (
        <Container sx={{display: "flex", flexDirection: "space-between"}}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h1">Sponsor</Typography>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardMedia component="img" image="/images/sponser.svg" alt="sponser" />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}