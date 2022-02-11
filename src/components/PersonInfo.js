import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, Stack} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";
import Box from "@mui/material/Box";
import RainbowTypography from "./RainbowTypography";
import Link from "@mui/material/Link";

export default function PersonInfo({name, about, src, title, id, more}) {
    return (
        <Container>
            <Grid container>
                <Grid item xs={5}>
                    <Card>
                        <LazyCardMedia component="img" image={src} alt={name} />
                    </Card>
                </Grid>
                <Grid item xs={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            px: 5
                        }}
                    >
                        <RainbowTypography variant="h2">{name}</RainbowTypography>
                        <RainbowTypography variant="h4">{title}</RainbowTypography>
                        {/*<RainbowTypography variant="p" sx={{lineHeight: 2}}>{about}</RainbowTypography>*/}
                        <Box sx={{ pt: 5 }}>
                            <RainbowTypography style={{lineHeight: 2}} dangerouslySetInnerHTML={{__html: about}} />
                            {
                                more ? <Link href={more}>More About {name}</Link> : []
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}