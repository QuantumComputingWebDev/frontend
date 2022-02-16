import Container from "@mui/material/Container";
import RainbowTypography from "./RainbowTypography";
import Paper from "@mui/material/Paper";
import {Box} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Spacer from "./Spacer";

export default function EventInfo({title, speaker, description, briefDescription}) {
    const text = description || briefDescription
    return (
        <Container sx={{ p: 3 }}>
            <Box sx={{display: "flex", justifyContent: "space-around"}}>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Avatar sx={{width: "20vw", height: "20vw", maxWidth: "12em", maxHeight: "12em"}} aria-label={title} src={speaker.src} className="avatar" />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", p: 3}}>
                    <RainbowTypography variant="h2" textAlign="center">{speaker.name}</RainbowTypography>
                </Box>
            </Box>
            <Spacer space={3} />
            <Box sx={{ display: "flex", justifyContent: "center"}}>
                <Paper sx={{ backgroundColor: "transparent", width: "80%"}} elevation={0}>
                    <Typography variant="h4" textAlign="center" sx={{color: "secondary.light"}}>{title}</Typography>
                    <Spacer space={1} />
                    <RainbowTypography variant="h5">{text}</RainbowTypography>
                </Paper>
            </Box>
        </Container>
    )
}