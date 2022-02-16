import Box from "@mui/material/Box";
import RainbowTypography from "./RainbowTypography";
import {useMediaQuery} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../styles/ResponsiveLargeHeader.css";


export default function ResponsiveLargeHeader({title, subtitle, src}) {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <Box sx={{ p: 3 }}>
            {
                matches ?
                    <Box sx={{display: "flex", justifyContent: "space-around"}}>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <Avatar sx={{width: "30vw", height: "30vw", maxWidth: "15em", maxHeight: "15em"}} aria-label={title} src={src} className="avatar" />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", p: 3}}>
                            <RainbowTypography variant="h2" textAlign="center">{title}</RainbowTypography>
                            <Typography variant="h4" textAlign="center" sx={{color: "secondary.light"}}>{subtitle}</Typography>
                        </Box>
                    </Box>
                    :
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar sx={{width: "50vw", height: "50vw"}} aria-label={title} src={src} className="avatar" />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", p: 3}}>
                            <RainbowTypography variant="h2" textAlign="center">{title}</RainbowTypography>
                            <Typography variant="h4" textAlign="center" sx={{color: "secondary.light"}}>{subtitle}</Typography>
                        </Box>
                    </Box>
            }
        </Box>
    )
}