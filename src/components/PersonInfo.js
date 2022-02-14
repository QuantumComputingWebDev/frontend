import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, CardContent, Stack} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";
import Box from "@mui/material/Box";
import RainbowTypography from "./RainbowTypography";
import Link from "@mui/material/Link";
import ImageText from "./ImageText";
import UpLink from "./UpLink";
import Paper from "@mui/material/Paper";

export default function PersonInfo({name, about, src, title, id, link}) {
    return (
        <Container>
            <ImageText src={src}>
                <Box sx={{ display: 'flex', flexDirection: 'column', px: 5 }}>
                    <RainbowTypography variant="h2">{name}</RainbowTypography>
                    <RainbowTypography variant="h4">{title}</RainbowTypography>
                    <Box sx={{ pt: 5 }}>
                        <RainbowTypography style={{lineHeight: 2}} dangerouslySetInnerHTML={{__html: about}} />
                        {
                            link ? <Link href={link}>More About {name}</Link> : []
                        }
                    </Box>
                </Box>
            </ImageText>
        </Container>
    )
}