import Box from "@mui/material/Box";
import {Card, CardContent, useMediaQuery} from "@mui/material";
import LazyCardMedia from "./LazyCardMedia";


export default function ImageText(props) {
    const match = useMediaQuery((theme) => theme.breakpoints.down('md'));

    if(match) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column"}}>
                <img src={props.src} alt="poster" style={{ objectFit: "contain", maxHeight: "60vh"}} />
                {props.children}
            </Box>
        )
    } else {
        return (
            <Card sx={{ display: "flex" }} style={{ backgroundColor: "inherit" }} elevation={0}>
                <CardContent>{props.children}</CardContent>
                <LazyCardMedia component="img" image={props.src} alt="poster" style={{ maxHeight: "60vh" }} />
            </Card>
        )
    }
}
