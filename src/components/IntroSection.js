import FullCenterPage from "./FullCenterPage";
import {Box} from "@mui/material";
import RainbowTypography from "./RainbowTypography";
import {openRegisterDialog} from "./RegisterDialog";
import Typography from "@mui/material/Typography";

function Title(props) {
    return (
        <Typography
            variant="h1"
            color="inherit"
            sx={{ ...props.sx, fontFamily: "incomplete", display: "block"}}
            textAlign="center"
            href="/#about"
        >
            {props.children}
        </Typography>
    )
}

export default function IntroSection() {
    return (
        <FullCenterPage className="intro-section-container">
            <Box onClick={()=>window.location.href="/#about"} sx={{ display: "flex", justifyContent: "center"}}>
                <div className="glow">
                    <Title sx={{color: "secondary.light", transform: "scale(1.03)"}}>Quantum</Title>
                    <Title sx={{color: "secondary.main", transform: "scale(1.1)"}}>Machine</Title>
                    <Title sx={{color: "secondary.dark", transform: "scale(0.97)"}}>Learning</Title>
                </div>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", spacing: 5 }}>
                <RainbowTypography className="growHover" variant="h2" sx={{p: 5}} component="a" href="/#about">About</RainbowTypography>
                <RainbowTypography className="growHover" variant="h2" sx={{p: 5}} onClick={openRegisterDialog}>Register</RainbowTypography>
            </Box>
        </FullCenterPage>
    )
}
